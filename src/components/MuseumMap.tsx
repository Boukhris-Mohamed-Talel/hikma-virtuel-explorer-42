
import MuseumDoor from "./MuseumDoor";

interface MuseumMapProps {
  onSelectSection: (section: string) => void;
}

const MuseumMap = ({ onSelectSection }: MuseumMapProps) => {
  const sections = [
    { id: "savoir", title: "Les Savoirs en Partage" },
    { id: "sante", title: "Soigner avec Science et Foi" },
    { id: "villes", title: "Villes de Lumière" }
  ];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-hikma-accent font-bold mb-16">Carte interactive du musée</h2>
        <div className="flex flex-wrap gap-12 justify-center">
          {sections.map((section) => (
            <div key={section.id} className="floating" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <MuseumDoor 
                title={section.title} 
                onClick={() => onSelectSection(section.id)} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuseumMap;
