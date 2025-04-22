
import VideoPreview from "./VideoPreview";
import { Clock } from "lucide-react";

interface ModernComparison {
  scholar: string;
  modern: string;
  image: string;
  explanation: string;
}

interface ModernComparisonsProps {
  comparisons: ModernComparison[];
}

const ModernComparisons = ({ comparisons }: ModernComparisonsProps) => (
  <div>
    <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
      <span className="text-hikma-accent mr-2 h-4 w-4">●</span>
      Savants VS Aujourd'hui – Anecdotes Fun & Comparaisons
    </h2>
    <p className="text-hikma-sand mb-6 text-center bg-hikma-primary/40 p-3 rounded-lg border border-hikma-accent/30">
      Format TikTok: Comment ces génies de l'âge d'or islamique s'intégreraient dans notre monde moderne?
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {comparisons.map((comparison, index) => (
        <div key={index} className="bg-hikma-primary/60 backdrop-blur-sm border border-hikma-accent/50 rounded-lg overflow-hidden hover:scale-105 transition-transform">
          <div className="relative h-48">
            <img 
              src={comparison.image} 
              alt={comparison.scholar}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hikma-primary to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-hikma-accent font-medium text-lg">{comparison.scholar}</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="flex gap-2 items-start mb-3">
              <div className="bg-hikma-accent text-hikma-primary p-1 rounded-full">
                <Clock className="h-4 w-4" />
              </div>
              <p className="text-white text-lg font-semibold">
                {comparison.modern}
              </p>
            </div>
            <p className="text-hikma-sand text-sm">
              {comparison.explanation}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8">
      <VideoPreview 
        title="L'héritage scientifique du monde arabo-musulman" 
        thumbnail="/lovable-uploads/b92abae8-2081-4d96-ac7b-f58e6e36dbdf.png"
        videoUrl="https://www.youtube.com/embed/A84U5WiJB-4"
      />
    </div>
  </div>
);

export default ModernComparisons;
