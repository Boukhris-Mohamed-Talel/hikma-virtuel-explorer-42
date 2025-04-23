
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
      <div className="text-center">
        <h2 className="text-3xl text-hikma-accent font-bold mb-16">Carte interactive du musée</h2>
        
        {/* Stone wall background effect */}
        <div className="relative p-12 rounded-lg bg-[#2A2A2A] border-8 border-[#3E2723] shadow-2xl mb-12"
             style={{
               backgroundImage: "radial-gradient(#444 10%, transparent 11%), radial-gradient(#444 10%, transparent 11%)",
               backgroundSize: "30px 30px",
               backgroundPosition: "0 0, 15px 15px",
               boxShadow: "inset 0 0 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.7)"
             }}>
          
          {/* Museum door layout */}
          <div className="flex flex-wrap gap-16 justify-center items-end">
            {sections.map((section) => (
              <div 
                key={section.id} 
                className="floating museum-door-wrapper" 
                style={{ 
                  animationDelay: `${Math.random() * 2}s`,
                  filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.4))"
                }}
              >
                <MuseumDoor 
                  title={section.title} 
                  onClick={() => onSelectSection(section.id)} 
                />
                
                {/* Floor reflection effect */}
                <div className="h-4 w-full bg-gradient-to-b from-[#333] to-transparent opacity-40 rounded-b-lg mt-1"></div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-hikma-accent text-lg mt-4">Choisissez une porte pour explorer une section</p>
      </div>
    </div>
  );
};

export default MuseumMap;
