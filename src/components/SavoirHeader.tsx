
import { Volume2, Star } from "lucide-react";
import { Button } from "./ui/button";

interface SavoirHeaderProps {
  onBack: () => void;
  onPlayAmbient: () => void;
  onToggleQuotes: () => void;
  showQuotes: boolean;
}

const SavoirHeader = ({ onBack, onPlayAmbient, onToggleQuotes, showQuotes }: SavoirHeaderProps) => (
  <div className="text-center mb-12">
    <button
      onClick={onBack}
      className="mb-8 text-hikma-sand hover:text-hikma-accent flex items-center gap-2"
    >
      ← Retour à la carte du musée
    </button>
    <h1 className="text-3xl md:text-4xl text-hikma-accent font-bold mb-2">
      Les Savoirs en Partage
    </h1>
    <p className="text-xl text-hikma-sand italic mb-4">
      "À Bagdad, Cordoue ou Samarcande, on ne collectionnait pas l'or, mais les livres."
    </p>
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <Button
        onClick={onPlayAmbient}
        className="bg-hikma-secondary/50 hover:bg-hikma-secondary"
      >
        <Volume2 className="mr-2" />
        Ambiance sonore
      </Button>
      <Button
        onClick={onToggleQuotes}
        className="bg-hikma-accent/70 hover:bg-hikma-accent"
      >
        <Star className="mr-2" />
        {showQuotes ? "Masquer les citations" : "Mur des citations"}
      </Button>
    </div>
  </div>
);

export default SavoirHeader;
