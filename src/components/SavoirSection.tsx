
import { useState } from "react";
import Scholar from "./Scholar";
import ScholarModal from "./ScholarModal";
import QuizSection from "./QuizSection";
import { Volume2, Circle, Play, Video } from "lucide-react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

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
  const [showArtworks, setShowArtworks] = useState(false);
  
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
      description: "Instrument astronomique utilisé pour la navigation et le calcul du temps",
      image: "/photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Manuscrit du Canon d'Avicenne",
      description: "Page enluminée du célèbre traité médical",
      image: "/photo-1473177104440-ffee2f376098" 
    },
    {
      title: "Carte astronomique d'Al-Biruni",
      description: "Représentation des constellations et des corps célestes",
      image: "/photo-1472396961693-142e6e269027"
    }
  ];
  
  const playAmbientSound = () => {
    const audio = new Audio('/ambient-islamic.mp3');
    audio.play();
  };
  
  const playVideoPreview = () => {
    // Simulation d'une vidéo (en production, vous utiliseriez une vraie vidéo)
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-hikma-primary border border-hikma-accent p-4 rounded-lg z-50';
    toast.innerHTML = 'Chargement de la vidéo "L\'âge d\'or scientifique"...';
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
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
              onClick={playVideoPreview}
              className="bg-hikma-accent/70 hover:bg-hikma-accent"
            >
              <Video className="mr-2" />
              Vidéo: L'âge d'or
            </Button>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
            <Circle className="text-hikma-accent mr-2 h-4 w-4" />
            Portraits interactifs de savants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {scholars.map((scholar) => (
              <Scholar 
                key={scholar.id}
                name={scholar.name}
                description={scholar.description}
                period={scholar.period}
                image={scholar.image}
                onClick={() => setSelectedScholar(scholar)}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
            <Circle className="text-hikma-accent mr-2 h-4 w-4" />
            Œuvres et artefacts
          </h2>
          
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {artworks.map((artwork, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent hover:scale-105 transition-transform">
                      <CardContent className="flex flex-col items-center justify-center p-2">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title} 
                          className="object-cover h-64 w-full rounded-md mb-3" 
                        />
                        <div className="text-center">
                          <h3 className="text-hikma-accent font-medium text-lg">{artwork.title}</h3>
                          <p className="text-hikma-sand text-sm">{artwork.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
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
        
        <div className="text-center py-8 bg-hikma-primary/40 backdrop-blur-sm rounded-lg border border-hikma-accent/30 mb-16">
          <h3 className="text-xl text-hikma-accent mb-4">À découvrir bientôt</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Reconstruction 3D de la Maison de la Sagesse de Bagdad
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Mur des citations en calligraphie animée
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Mini-jeu "Quel savant es-tu ?"
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
