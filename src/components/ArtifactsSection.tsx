
import HistoricalArtifact from "./HistoricalArtifact";
import Sculpture3D from "./Sculpture3D";

interface Artwork {
  title: string;
  description: string;
  image: string;
  period: string;
}
interface Sculpture {
  title: string;
  sketchfabUrl: string;
  creditUrl: string;
  creditName: string;
  modelUrl: string;
}

interface ArtifactsSectionProps {
  artworks: Artwork[];
  sculptures: Sculpture[];
}

const ArtifactsSection = ({ artworks, sculptures }: ArtifactsSectionProps) => (
  <div>
    <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
      <span className="text-hikma-accent mr-2 h-4 w-4">●</span>
      Œuvres et artefacts
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {artworks.map((artwork, index) => (
        <HistoricalArtifact 
          key={index}
          title={artwork.title}
          description={artwork.description}
          image={artwork.image}
          period={artwork.period}
        />
      ))}
      {sculptures.map((sculpt, idx) => (
        <Sculpture3D
          key={idx}
          title={sculpt.title}
          sketchfabUrl={sculpt.sketchfabUrl}
          creditUrl={sculpt.creditUrl}
          creditName={sculpt.creditName}
          modelUrl={sculpt.modelUrl}
        />
      ))}
    </div>
  </div>
);

export default ArtifactsSection;
