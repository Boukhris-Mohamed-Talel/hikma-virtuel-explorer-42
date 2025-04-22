
import ArtifactsSection from "./ArtifactsSection";

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
interface ArtifactsTabProps {
  artworks: Artwork[];
  sculptures: Sculpture[];
}

const ArtifactsTab = ({ artworks, sculptures }: ArtifactsTabProps) => (
  <ArtifactsSection artworks={artworks} sculptures={sculptures} />
);

export default ArtifactsTab;
