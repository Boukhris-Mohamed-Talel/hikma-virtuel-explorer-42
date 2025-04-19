import { useState } from "react";
import Scholar from "./Scholar";
import ScholarModal from "./ScholarModal";
import QuizSection from "./QuizSection";
import { Volume2 } from "lucide-react";
import { Button } from "./ui/button";

interface Scholar {
  id: string;
  name: string;
  period: string;
  description: string;
  contributions: string[];
}

interface SavoirSectionProps {
  onBack: () => void;
}

const SavoirSection = ({ onBack }: SavoirSectionProps) => {
  const [selectedScholar, setSelectedScholar] = useState<Scholar | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  
  const scholars: Scholar[] = [
    {
      id: "avicenne",
      name: "Ibn Sina (Avicenne)",
      period: "980-1037",
      description: "Médecin, philosophe et scientifique persan, l'un des plus grands penseurs et érudits du monde islamique médiéval.",
      contributions: [
        "Auteur du 'Canon de la médecine', référence médicale en Europe jusqu'au 17e siècle",
        "Pionnier de la neuropsychiatrie et de la psychophysiologie",
        "Père de la médecine moderne avec plus de 400 ouvrages"
      ]
    },
    {
      id: "alkhawarizmi",
      name: "Al-Khawarizmi",
      period: "780-850",
      description: "Mathématicien, astronome et géographe persan, fondateur de l'algèbre et considéré comme le père des algorithmes.",
      contributions: [
        "Invention de l'algèbre et du système décimal",
        "Son nom a donné le mot 'algorithme'",
        "Auteur du Kitab al-Jabr, premier traité d'algèbre"
      ]
    },
    {
      id: "alfarabi",
      name: "Al-Farabi",
      period: "872-950",
      description: "Philosophe, mathématicien et théoricien de la musique turco-persan, considéré comme le 'Second Maître' après Aristote.",
      contributions: [
        "Développement de la logique aristotélicienne dans le monde musulman",
        "Théorie de l'harmonie entre foi et raison",
        "Contributions majeures à la théorie musicale"
      ]
    },
    {
      id: "ibnrushd",
      name: "Ibn Rushd (Averroès)",
      period: "1126-1198",
      description: "Philosophe, théologien, juriste et médecin andalou, célèbre pour ses commentaires sur Aristote et sa défense de la raison.",
      contributions: [
        "Commentaires exhaustifs sur Aristote qui ont influencé la pensée européenne",
        "Défense de la philosophie contre les attaques théologiques",
        "Contributions en médecine, astronomie et jurisprudence islamique"
      ]
    }
  ];
  
  const playAmbientSound = () => {
    const audio = new Audio('/ambient-islamic.mp3');
    audio.play();
  };
  
  return (
    <div className="min-h-screen w-full celestial-bg p-8">
      <button 
        onClick={onBack}
        className="mb-8 text-hikma-sand hover:text-hikma-accent flex items-center gap-2"
      >
        ← Retour à la carte du musée
      </button>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-hikma-accent font-bold mb-2">
            Les Savoirs en Partage
          </h1>
          <p className="text-xl text-hikma-sand italic mb-4">
            "À Bagdad, Cordoue ou Samarcande, on ne collectionnait pas l'or, mais les livres."
          </p>
          <Button
            onClick={playAmbientSound}
            className="bg-hikma-secondary/50 hover:bg-hikma-secondary"
          >
            <Volume2 className="mr-2" />
            Ambiance sonore
          </Button>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl text-white font-semibold mb-6">
            Portraits interactifs de savants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {scholars.map((scholar) => (
              <Scholar 
                key={scholar.id}
                name={scholar.name}
                description={scholar.description}
                period={scholar.period}
                onClick={() => setSelectedScholar(scholar)}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <Button
            onClick={() => setShowQuiz(!showQuiz)}
            className="mb-8 bg-hikma-accent hover:bg-hikma-accent/80"
          >
            {showQuiz ? "Masquer le quiz" : "Tester vos connaissances"}
          </Button>
          
          {showQuiz && <QuizSection />}
        </div>
        
        <div className="text-center py-8">
          <p className="text-hikma-sand mb-4">Plus de contenu à venir dans cette section :</p>
          <ul className="text-white space-y-2">
            <li>🏛️ Animation 3D de la Maison de la Sagesse de Bagdad</li>
            <li>✨ Mur des citations en calligraphie animée</li>
            <li>🎮 Mini-jeu "Quel savant es-tu ?"</li>
          </ul>
        </div>
      </div>
      
      {selectedScholar && (
        <ScholarModal 
          name={selectedScholar.name}
          description={selectedScholar.description}
          period={selectedScholar.period}
          contributions={selectedScholar.contributions}
          onClose={() => setSelectedScholar(null)}
        />
      )}
    </div>
  );
};

export default SavoirSection;
