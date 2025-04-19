
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Circle } from "lucide-react";

interface ScholarModalProps {
  name: string;
  description: string;
  period: string;
  contributions: string[];
  image: string;
  onClose: () => void;
}

const ScholarModal = ({ name, description, period, contributions, image, onClose }: ScholarModalProps) => {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    setVisible(true);
    const newAudio = new Audio('/scholar-narration.mp3');
    setAudio(newAudio);
    
    // Close on ESC key
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);
  
  const handleClose = () => {
    if (audio) {
      audio.pause();
    }
    setVisible(false);
    setTimeout(onClose, 300);
  };
  
  const toggleAudio = () => {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 transition-opacity duration-300 overflow-y-auto py-10"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      <div 
        className="bg-hikma-primary/90 backdrop-blur-md border border-hikma-accent rounded-lg max-w-2xl w-full m-4 transition-transform duration-300 transform origin-center"
        style={{ transform: visible ? 'scale(1)' : 'scale(0.9)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button 
            className="absolute top-4 right-4 text-white hover:text-hikma-accent z-10"
            onClick={handleClose}
          >
            ✕
          </button>
          
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 p-6">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 border-4 border-hikma-accent">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
              
              <Button 
                className="w-full bg-hikma-accent hover:bg-hikma-accent/80 mb-2"
                onClick={toggleAudio}
              >
                {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                {isPlaying ? "Pause narration" : "Écouter narration"}
              </Button>
            </div>
            
            <div className="w-full md:w-3/5 p-6">
              <h2 className="text-2xl font-bold text-hikma-accent">{name}</h2>
              <p className="text-hikma-sand mb-4">{period}</p>
              
              <p className="text-white mb-4">{description}</p>
              
              <h3 className="text-lg font-semibold text-hikma-accent mb-2">Contributions</h3>
              <ul className="list-disc list-inside text-white">
                {contributions.map((contribution, idx) => (
                  <li key={idx} className="mb-1">{contribution}</li>
                ))}
              </ul>
              
              <div className="mt-4 p-3 bg-hikma-secondary/30 rounded-lg">
                <p className="text-hikma-sand text-sm italic">
                  "La science est l'âme de la prospérité des nations et la source de vie de toute civilisation."
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-hikma-accent/30">
            <h3 className="text-lg font-semibold text-hikma-accent mb-2">Œuvres principales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {name === "Ibn Sina (Avicenne)" && (
                <>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Le Canon de la Médecine</h4>
                    <p className="text-hikma-sand text-xs">Une encyclopédie médicale qui a fait autorité pendant plus de 700 ans</p>
                  </div>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Le Livre de la Guérison</h4>
                    <p className="text-hikma-sand text-xs">Ouvrage philosophique traitant de logique, métaphysique et sciences naturelles</p>
                  </div>
                </>
              )}
              {name === "Al-Khawarizmi" && (
                <>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Kitab al-Jabr</h4>
                    <p className="text-hikma-sand text-xs">Premier traité d'algèbre qui a donné son nom à cette discipline</p>
                  </div>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Livre du calcul indien</h4>
                    <p className="text-hikma-sand text-xs">Introduction du système décimal et de l'algorithme dans le monde arabe</p>
                  </div>
                </>
              )}
              {name === "Al-Farabi" && (
                <>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Traité des opinions des habitants de la cité vertueuse</h4>
                    <p className="text-hikma-sand text-xs">Vision utopique d'une société idéale</p>
                  </div>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Grand Livre de la Musique</h4>
                    <p className="text-hikma-sand text-xs">Théorie musicale et acoustique scientifique</p>
                  </div>
                </>
              )}
              {name === "Ibn Rushd (Averroès)" && (
                <>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Commentaires sur Aristote</h4>
                    <p className="text-hikma-sand text-xs">Commentaires détaillés qui ont influencé la pensée occidentale</p>
                  </div>
                  <div className="p-2 bg-hikma-secondary/20 rounded">
                    <h4 className="text-white font-medium">Incohérence de l'Incohérence</h4>
                    <p className="text-hikma-sand text-xs">Réponse à Al-Ghazali défendant la philosophie rationnelle</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarModal;
