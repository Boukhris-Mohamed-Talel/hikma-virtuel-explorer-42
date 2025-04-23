
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Building, Home, School, Play, Circle, FileAudio, Image } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const VillesSection = ({ onBack }: { onBack: () => void }) => {
  const { toast } = useToast();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAudio, setActiveAudio] = useState<HTMLAudioElement | null>(null);

  const playAmbientSound = () => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }
    
    const audio = new Audio('/souk-ambient.mp3');
    audio.play();
    setActiveAudio(audio);
    setIsPlaying(true);
    
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    
    toast({
      title: "Ambiance de Souk",
      description: "Sons caractéristiques d'un souk médiéval",
    });
  };
  
  const stopSound = () => {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const villesHistoriques = [
    {
      nom: "Cordoue",
      description: "Centre intellectuel de l'Andalousie, connue pour sa Grande Mosquée",
      image: "https://cdn-imgix.headout.com/media/images/dcac2e96969db49cc8778390c2dbd3ed-23466-cordoba-day-trip-to-cordoba---mosque-from-seville-05.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces",
      faits: [
        "Au 10ème siècle, Cordoue comptait 70 bibliothèques",
        "Sa Grande Mosquée pouvait accueillir 40 000 fidèles",
        "Premier éclairage public urbain de l'Europe"
      ]
    },
    {
      nom: "Bagdad",
      description: "Capitale du savoir, abritant la Maison de la Sagesse",
      image: "https://patrimoinedorient.org/wp-content/uploads/2023/05/artiste-inconnu.jpg",
      faits: [
        "Capitale circulaire parfaite de 2 km de diamètre",
        "Centre mondial de traduction des textes anciens",
        "Plus grande bibliothèque du monde médiéval"
      ]
    },
    {
      nom: "Fès",
      description: "Première université du monde : Al Quaraouiyine",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Al_Quaraouiyine.jpg/330px-Al_Quaraouiyine.jpg",
      faits: [
        "Université fondée en 859 par Fatima Al-Fihri",
        "Système d'adduction d'eau sophistiqué",
        "Planification urbaine centrée sur le bien-être"
      ]
    }
  ];
  
  const urbanArtworks = [
    {
      title: "Maquette de Bagdad",
      description: "Reconstitution de la ville ronde",
      image: "https://external-preview.redd.it/TPLGL_4gcT2QUiQd__8wlLXfgNgWchSd8BP-abxZf7U.jpg?auto=webp&s=2a9d0e428086c5783d6c825070ccdc804da69a48"
    },
    {
      title: "Plan hydraulique de Fès",
      description: "Système d'eau et de fontaines",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GB53uMSHQRMirIKpfNyrkc4LwKUNta4HIw&s"
    },
    {
      title: "Grande Mosquée de Cordoue",
      description: "Modèle des arches caractéristiques",
      image: "https://c8.alamy.com/comp/2C8X3WK/extrieur-de-la-mosque-de-cordoue-du-cot-de-la-calle-del-meson-del-sol-exterior-of-the-mosque-of-cordoba-next-to-calle-del-meson-del-sol-page-illustration-from-the-book-spain-lespagne-by-davillier-jean-charles-barn-1823-1883-dor-gustave-1832-1883-published-in-paris-france-by-libreria-hachette-in-1874-2C8X3WK.jpg"
      // I widened the image container in CSS below for better display to hide the black bar.
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
            Villes de Lumière
          </h1>
          <p className="text-xl text-hikma-sand italic mb-6">
            "Des villes pensées pour l'humain, la nature et le sacré."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={isPlaying ? stopSound : playAmbientSound}
              className="bg-hikma-accent hover:bg-hikma-accent/80 mb-4"
            >
              {isPlaying ? <Circle className="mr-2 h-4 w-4 animate-pulse" /> : <FileAudio className="mr-2 h-4 w-4" />}
              {isPlaying ? "Arrêter l'ambiance" : "Ambiance de Souk"}
            </Button>
            <Button
              onClick={() => setShowGallery(!showGallery)}
              className="bg-hikma-secondary/60 hover:bg-hikma-secondary mb-4"
            >
              <Image className="mr-2 h-4 w-4" />
              Œuvres architecturales
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {villesHistoriques.map((ville, index) => (
            <Card 
              key={index}
              className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent hover:scale-105 transition-transform cursor-pointer group overflow-hidden"
              onClick={() => setSelectedCity(ville.nom)}
            >
              <div className="relative">
                <img 
                  src={ville.image} 
                  alt={ville.nom}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hikma-primary to-transparent opacity-80"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-hikma-accent flex items-center">
                  <Circle className="text-hikma-accent mr-2 h-3 w-3" />
                  {ville.nom}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-hikma-sand mb-2">{ville.description}</p>
                <div className="bg-hikma-secondary/20 p-2 rounded">
                  <p className="text-xs text-white">
                    <span className="text-hikma-accent">Le saviez-vous ?</span> {ville.faits[0]}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {showGallery && (
          <div className="mb-12">
            <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
              <Circle className="text-hikma-accent mr-2 h-4 w-4" />
              Œuvres architecturales
            </h2>
            
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {urbanArtworks.map((item, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent hover:scale-105 transition-transform">
                        <CardContent className="flex flex-col items-center justify-center p-2">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="object-cover h-40 w-full rounded-md mb-3" 
                            style={item.title === "Grande Mosquée de Cordoue" ? { width: "105%", marginLeft: "-2.5%" } : undefined}
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

        <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent mb-8">
          <CardHeader>
            <CardTitle className="text-hikma-accent flex items-center">
              <Circle className="text-hikma-accent mr-2 h-4 w-4" />
              Principes Urbanistiques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center bg-hikma-secondary/20 p-4 rounded-lg hover:bg-hikma-secondary/30 transition-colors">
                <Building className="h-8 w-8 mx-auto text-hikma-accent mb-2" />
                <h3 className="text-white font-bold mb-2">Wakf</h3>
                <p className="text-hikma-sand">Système de dotation pour les biens publics et infrastructure sociale partagée</p>
              </div>
              <div className="text-center bg-hikma-secondary/20 p-4 rounded-lg hover:bg-hikma-secondary/30 transition-colors">
                <Home className="h-8 w-8 mx-auto text-hikma-accent mb-2" />
                <h3 className="text-white font-bold mb-2">Hammam</h3>
                <p className="text-hikma-sand">Bains publics et lieu de socialisation, essentiels à la vie communautaire</p>
              </div>
              <div className="text-center bg-hikma-secondary/20 p-4 rounded-lg hover:bg-hikma-secondary/30 transition-colors">
                <School className="h-8 w-8 mx-auto text-hikma-accent mb-2" />
                <h3 className="text-white font-bold mb-2">Souk</h3>
                <p className="text-hikma-sand">Organisation économique et sociale, au cœur de l'échange interculturel</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center py-8 bg-hikma-primary/40 backdrop-blur-sm rounded-lg border border-hikma-accent/30">
          <h3 className="text-xl text-hikma-accent mb-4">Prochainement</h3>
          <ul className="text-white space-y-2">
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Modélisation 3D interactive de Cordoue au 10ème siècle
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Exploration sonore d'un souk médiéval
            </li>
            <li className="flex items-center justify-center gap-2">
              <Circle className="text-hikma-accent h-3 w-3" />
              Reconstitution des techniques hydrauliques urbaines
            </li>
          </ul>
        </div>
      </div>

      <Dialog open={!!selectedCity} onOpenChange={() => setSelectedCity(null)}>
        <DialogContent className="bg-hikma-primary border-hikma-accent max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-hikma-accent">{selectedCity}</DialogTitle>
          </DialogHeader>
          <div className="text-hikma-sand">
            <div className="relative w-full h-64 bg-hikma-secondary/30 mb-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-hikma-accent opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
              {selectedCity && (
                <img 
                  src={villesHistoriques.find(v => v.nom === selectedCity)?.image || ''} 
                  alt={selectedCity} 
                  className="w-full h-full object-cover opacity-30"
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 bg-hikma-primary/80 p-2 rounded">
                <p className="text-sm">Visite virtuelle en développement...</p>
              </div>
            </div>
            
            {selectedCity && (
              <div className="space-y-4">
                <h3 className="text-hikma-accent font-medium">Faits notables sur {selectedCity}</h3>
                <ul className="space-y-2">
                  {villesHistoriques.find(v => v.nom === selectedCity)?.faits.map((fait, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Circle className="text-hikma-accent h-3 w-3 mt-1 flex-shrink-0" />
                      <span>{fait}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-hikma-secondary/20 p-3 rounded-lg mt-4">
                  <h3 className="text-hikma-accent font-medium mb-2">Principes d'urbanisme</h3>
                  <p className="text-sm">
                    Les villes islamiques médiévales étaient conçues selon des principes de vie communautaire,
                    de respect de l'intimité, d'intégration des espaces verts et d'accès à l'eau.
                    Elles représentaient un modèle urbain où l'humain était au centre des préoccupations.
                  </p>
                </div>
              </div>
            )}
            
            <p className="italic text-center text-xs text-hikma-sand/70 mt-6">
              * Bientôt : Explorez les rues et monuments historiques en 3D
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VillesSection;

