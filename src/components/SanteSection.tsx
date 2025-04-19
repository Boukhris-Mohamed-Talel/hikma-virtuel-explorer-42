
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Hospital, Bandage, Ambulance, Play, Circle, Image, FileAudio } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const SanteSection = ({ onBack }: { onBack: () => void }) => {
  const { toast } = useToast();
  const [showBimaristan, setShowBimaristan] = useState(false);
  const [showHerbs, setShowHerbs] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);

  const playHealingSound = () => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }
    
    const audio = new Audio('/healing-chant.mp3');
    audio.play();
    setActiveAudio(audio);
    setIsPlaying(true);
    
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    
    toast({
      title: "Son de guérison",
      description: "Écoutez les chants traditionnels de guérison",
    });
  };
  
  const stopSound = () => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const remedesTraditionels = [
    {
      nom: "Miel et Nigelle",
      description: "Une combinaison puissante utilisée pour renforcer l'immunité et traiter diverses affections respiratoires. Le miel était considéré comme un remède universel, tandis que la nigelle était appelée 'la graine qui guérit de tout sauf la mort'.",
      icon: <Bandage className="h-6 w-6 text-hikma-accent" />,
      image: "/photo-1472396961693-142e6e269027"
    },
    {
      nom: "Hijama (Ventouses)",
      description: "Technique de médecine préventive et curative qui consiste à extraire le sang 'impur' à l'aide de ventouses. Cette pratique était largement utilisée pour soulager les douleurs musculaires, les migraines et améliorer la circulation sanguine.",
      icon: <Hospital className="h-6 w-6 text-hikma-accent" />,
      image: "/photo-1465146344425-f00d5f5c8f07"
    },
    {
      nom: "Eau de Rose",
      description: "Utilisée pour ses propriétés apaisantes et anti-inflammatoires, l'eau de rose était un composant essentiel dans les traitements dermatologiques et ophtalmologiques. Elle était également utilisée comme tonique cardiaque et pour réduire le stress.",
      icon: <Ambulance className="h-6 w-6 text-hikma-accent" />,
      image: "/photo-1473177104440-ffee2f376098"
    }
  ];
  
  const bimaristanFacts = [
    "Les bimaristans étaient gratuits et ouverts à tous sans distinction de religion ou de statut social",
    "Ils disposaient de départements spécialisés: ophtalmologie, chirurgie, médecine interne",
    "Musique et eau courante étaient utilisées comme thérapies complémentaires",
    "Séparation des patients selon leurs pathologies pour éviter les contaminations",
    "Chaque patient recevait des vêtements propres et un lit individuel"
  ];
  
  const sculptures = [
    {
      title: "Le Canon d'Avicenne",
      description: "Reproduction d'une page du célèbre traité médical",
      image: "/photo-1473177104440-ffee2f376098"
    },
    {
      title: "Instruments médicaux",
      description: "Collection d'outils chirurgicaux médiévaux",
      image: "/photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Jardin médicinal",
      description: "Reconstitution d'un jardin de plantes médicinales",
      image: "/photo-1472396961693-142e6e269027"
    }
  ];

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
          <h1 className="text-3xl md:text-4xl text-hikma-accent font-bold mb-4">
            Soigner avec Science et Foi
          </h1>
          <p className="text-xl text-hikma-sand italic mb-6">
            "Guérir le corps, apaiser l'âme. La médecine du futur s'inspire du passé."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={isPlaying ? stopSound : playHealingSound}
              className="bg-hikma-accent hover:bg-hikma-accent/80"
            >
              {isPlaying ? <Circle className="mr-2 h-4 w-4 animate-pulse" /> : <FileAudio className="mr-2 h-4 w-4" />}
              {isPlaying ? "Arrêter le chant" : "Écouter un chant de guérison"}
            </Button>
            <Button
              onClick={() => setShowHerbs(!showHerbs)}
              className="bg-hikma-secondary/60 hover:bg-hikma-secondary"
            >
              <Image className="mr-2 h-4 w-4" />
              Galerie d'artefacts
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hikma-primary/90 z-10"></div>
            <img 
              src="/photo-1472396961693-142e6e269027" 
              alt="Ancien Bimaristan"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-500"
            />
            <CardHeader className="relative z-20">
              <CardTitle className="text-hikma-accent">Le Bimaristan</CardTitle>
            </CardHeader>
            <CardContent className="relative z-20">
              <p className="text-hikma-sand mb-4">
                Découvrez l'hôpital médiéval islamique, un lieu où science et spiritualité se rencontrent.
              </p>
              <div className="mb-4 p-3 bg-hikma-secondary/20 rounded-lg">
                <h4 className="text-white text-sm font-medium mb-2">Saviez-vous que...</h4>
                <p className="text-hikma-sand text-xs">{bimaristanFacts[Math.floor(Math.random() * bimaristanFacts.length)]}</p>
              </div>
              <Button 
                onClick={() => setShowBimaristan(true)}
                className="w-full bg-hikma-accent hover:bg-hikma-accent/80"
              >
                Visite Virtuelle
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent">
            <CardHeader>
              <CardTitle className="text-hikma-accent">Remèdes Traditionnels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {remedesTraditionels.map((remede, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full flex items-center justify-start gap-3 bg-hikma-secondary/50 hover:bg-hikma-secondary"
                      >
                        {remede.icon}
                        {remede.nom}
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-hikma-primary border-hikma-accent w-80">
                      <div className="flex flex-col gap-2">
                        <img 
                          src={remede.image} 
                          alt={remede.nom} 
                          className="w-full h-32 object-cover rounded-md" 
                        />
                        <p className="text-hikma-sand text-sm">{remede.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {showHerbs && (
          <div className="mb-16">
            <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
              <Circle className="text-hikma-accent mr-2 h-4 w-4" />
              Collection d'artefacts médicaux
            </h2>
            
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {sculptures.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent hover:scale-105 transition-transform">
                        <CardContent className="flex flex-col items-center justify-center p-2">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="object-cover h-40 w-full rounded-md mb-3" 
                          />
                          <div className="text-center">
                            <h3 className="text-hikma-accent font-medium">{item.title}</h3>
                            <p className="text-hikma-sand text-xs">{item.description}</p>
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
        )}

        <div className="text-center py-8 bg-hikma-primary/40 backdrop-blur-sm rounded-lg border border-hikma-accent/30">
          <h3 className="text-xl text-hikma-accent mb-4">À découvrir bientôt</h3>
          <ul className="text-white space-y-2">
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

      <Dialog open={showBimaristan} onOpenChange={setShowBimaristan}>
        <DialogContent className="bg-hikma-primary border-hikma-accent max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-hikma-accent">Bimaristan Virtuel</DialogTitle>
          </DialogHeader>
          <div className="text-hikma-sand">
            <div className="relative w-full h-64 bg-hikma-secondary/30 mb-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-hikma-accent opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
              <img 
                src="/photo-1472396961693-142e6e269027" 
                alt="Aperçu du Bimaristan" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-hikma-primary/80 p-2 rounded">
                <p className="text-sm">Visite virtuelle 3D d'un Bimaristan médiéval (en développement)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-hikma-secondary/20 p-3 rounded-lg">
                <h3 className="text-hikma-accent font-medium mb-2">Architecture du bien-être</h3>
                <p className="text-sm">Les bimaristans étaient conçus avec des cours intérieures, des jardins et des fontaines pour créer un environnement apaisant favorable à la guérison.</p>
              </div>
              <div className="bg-hikma-secondary/20 p-3 rounded-lg">
                <h3 className="text-hikma-accent font-medium mb-2">Médecine holistique</h3>
                <p className="text-sm">Le traitement incluait non seulement des médicaments, mais aussi la musique, les odeurs, les couleurs et l'environnement pour soigner l'ensemble du patient.</p>
              </div>
            </div>
            
            <p className="italic text-center text-xs text-hikma-sand/70 mt-6">
              * Cette fonctionnalité est en cours de développement et sera disponible prochainement.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SanteSection;
