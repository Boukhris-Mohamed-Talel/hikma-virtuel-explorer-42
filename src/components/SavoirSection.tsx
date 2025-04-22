import { useState } from "react";
import Scholar from "./Scholar";
import ScholarModal from "./ScholarModal";
import QuizSection from "./QuizSection";
import QuotesWall from "./QuotesWall";
import HistoricalArtifact from "./HistoricalArtifact";
import VideoPreview from "./VideoPreview";
import Sculpture3D from "./Sculpture3D";
import { Volume2, Circle, Video, Lightbulb, Book, Star, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ScholarsGrid from "./ScholarsGrid";
import ModernComparisons from "./ModernComparisons";
import ArtifactsSection from "./ArtifactsSection";

interface Scholar {
  id: string;
  name: string;
  period: string;
  description: string;
  contributions: string[];
  image: string;
}

interface SavoirSectionProps {
  onBack: () => void;
}

const SavoirSection = ({ onBack }: SavoirSectionProps) => {
  const [selectedScholar, setSelectedScholar] = useState<Scholar | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);
  const [activeTab, setActiveTab] = useState("scholars");
  
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
      ],
      image: "/lovable-uploads/3ecdbe4b-230b-4f7f-bd49-988c9b177303.png"
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
      ],
      image: "/lovable-uploads/9a65f8ba-2854-4abf-b428-16d748d3b77f.png"
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
      ],
      image: "/lovable-uploads/95756837-5ff6-4db4-a2ba-34bfdde34846.png"
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
      ],
      image: "/lovable-uploads/a0d95aa8-365d-4cca-9ff6-2bea03a5efac.png"
    }
  ];
  
  const artworks = [
    {
      title: "Astrolabe persan",
      description: "Instrument astronomique de précision utilisé pour la navigation et les calculs astronomiques",
      image: "/lovable-uploads/de10c8ac-b7b2-4c0a-a603-20624e486961.png",
      period: "Xe siècle"
    },
    {
      title: "Manuscrit du Canon d'Avicenne",
      description: "Page enluminée du traité médical le plus influent de l'histoire islamique",
      image: "/lovable-uploads/48f949c1-ff51-4cd6-851d-39c131c84d5e.png",
      period: "XIe siècle"
    },
    {
      title: "Le livre des étoiles fixes",
      description: "Traité d'astronomie d'Abd al-Rahmân al-Sûfî",
      image: "/lovable-uploads/5a9b019c-0177-4e62-8648-85cf49f7fba9.png",
      period: "903-986"
    },
    {
      title: "Grande Mosquée de Bagdad",
      description: "Chef-d'œuvre de l'architecture islamique",
      image: "/lovable-uploads/b92abae8-2081-4d96-ac7b-f58e6e36dbdf.png",
      period: "VIIIe siècle"
    }
  ];
  
  const modernComparisons = [
    {
      scholar: "Ibn Sina (Avicenne)",
      modern: "Un influenceur bien-être entre TEDx et Dr Good!",
      image: "/lovable-uploads/3ecdbe4b-230b-4f7f-bd49-988c9b177303.png",
      explanation: "Avec ses connaissances médicales et son approche holistique, Ibn Sina serait aujourd'hui une célébrité de la santé avec des millions d'abonnés sur les réseaux sociaux."
    },
    {
      scholar: "Al-Khawarizmi",
      modern: "Un dev chez Google.",
      image: "/lovable-uploads/9a65f8ba-2854-4abf-b428-16d748d3b77f.png",
      explanation: "L'inventeur des algorithmes serait aujourd'hui un développeur star créant les systèmes qui alimentent nos recherches et nos applications."
    },
    {
      scholar: "Al-Biruni",
      modern: "Le Neil deGrasse Tyson médiéval.",
      image: "/lovable-uploads/95756837-5ff6-4db4-a2ba-34bfdde34846.png",
      explanation: "Ce polymathe passionné par l'astronomie et la physique serait aujourd'hui un vulgarisateur scientifique charismatique expliquant les mystères de l'univers."
    }
  ];
  
  const sculptures = [
    {
      title: "Statue 3D – Avicenna (Ibn Sina)",
      sketchfabUrl: "https://sketchfab.com/3d-models/avicenna-ibn-sina-387bcc4327564cf6ad34ef8c75e585ac?utm_medium=embed&utm_campaign=share-popup&utm_content=387bcc4327564cf6ad34ef8c75e585ac",
      creditUrl: "https://sketchfab.com/nurainiwaheedah?utm_medium=embed&utm_campaign=share-popup&utm_content=387bcc4327564cf6ad34ef8c75e585ac",
      creditName: "nurainiwaheedah",
      modelUrl: "https://sketchfab.com/models/387bcc4327564cf6ad34ef8c75e585ac/embed"
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
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button
              onClick={playAmbientSound}
              className="bg-hikma-secondary/50 hover:bg-hikma-secondary"
            >
              <Volume2 className="mr-2" />
              Ambiance sonore
            </Button>
            <Button 
              onClick={() => setShowQuotes(!showQuotes)}
              className="bg-hikma-accent/70 hover:bg-hikma-accent"
            >
              <Star className="mr-2" />
              {showQuotes ? "Masquer les citations" : "Mur des citations"}
            </Button>
          </div>
        </div>
        
        {showQuotes && (
          <div className="mb-12 animate-fade-in">
            <QuotesWall />
          </div>
        )}
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-hikma-primary/60">
            <TabsTrigger value="scholars" className="data-[state=active]:bg-hikma-accent">
              <Book className="mr-2 h-4 w-4" /> Savants
            </TabsTrigger>
            <TabsTrigger value="comparisons" className="data-[state=active]:bg-hikma-accent">
              <Clock className="mr-2 h-4 w-4" /> Savants VS Aujourd'hui
            </TabsTrigger>
            <TabsTrigger value="artifacts" className="data-[state=active]:bg-hikma-accent">
              <Lightbulb className="mr-2 h-4 w-4" /> Artefacts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="scholars">
            <ScholarsGrid 
              scholars={scholars}
              onSelect={setSelectedScholar}
            />
          </TabsContent>
          
          <TabsContent value="comparisons">
            <ModernComparisons comparisons={modernComparisons} />
          </TabsContent>
          
          <TabsContent value="artifacts">
            <ArtifactsSection artworks={artworks} sculptures={sculptures} />
          </TabsContent>
        </Tabs>
        
        <div className="mb-16">
          <Button
            onClick={() => setShowQuiz(!showQuiz)}
            className="mb-8 bg-hikma-accent hover:bg-hikma-accent/80"
          >
            {showQuiz ? "Masquer le quiz" : "Tester vos connaissances"}
          </Button>
          
          {showQuiz && <QuizSection />}
        </div>
        
        <div className="text-center py-8 bg-hikma-primary/40 backdrop-blur-sm rounded-lg border border-hikma-accent/30 mb-16">
          <h3 className="text-xl text-hikma-accent mb-4">À découvrir bientôt</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Reconstruction 3D de la Maison de la Sagesse de Bagdad
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Mini-jeu "Quel savant es-tu ?"
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Expérience VR: Opération chirurgicale au 10ème siècle
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Encyclopédie interactive des plantes médicinales
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Reconstitution sonore d'une salle de consultation médiévale
            </li>
          </ul>
        </div>
      </div>
      
      {selectedScholar && (
        <ScholarModal 
          name={selectedScholar.name}
          description={selectedScholar.description}
          period={selectedScholar.period}
          contributions={selectedScholar.contributions}
          image={selectedScholar.image}
          onClose={() => setSelectedScholar(null)}
        />
      )}
    </div>
  );
};

export default SavoirSection;
