import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Building, Home, School } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";

const VillesSection = ({ onBack }: { onBack: () => void }) => {
  const { toast } = useToast();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const playAmbientSound = () => {
    const audio = new Audio('/souk-ambient.mp3');
    audio.play();
  };

  const villesHistoriques = [
    {
      nom: "Cordoue",
      description: "Centre intellectuel de l'Andalousie, connue pour sa Grande Mosquée",
      image: "/photo-1466442929976-97f336a657be"
    },
    {
      nom: "Bagdad",
      description: "Capitale du savoir, abritant la Maison de la Sagesse",
      image: "/photo-1492321936769-b49830bc1d1e"
    },
    {
      nom: "Fès",
      description: "Première université du monde : Al Quaraouiyine",
      image: "/photo-1473177104440-ffee2f376098"
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
          <Button
            onClick={playAmbientSound}
            className="bg-hikma-accent hover:bg-hikma-accent/80 mb-8"
          >
            <Building className="mr-2 h-4 w-4" />
            Ambiance de Souk
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {villesHistoriques.map((ville, index) => (
            <Card 
              key={index}
              className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedCity(ville.nom)}
            >
              <img 
                src={ville.image} 
                alt={ville.nom}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-hikma-accent">{ville.nom}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-hikma-sand">{ville.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent mb-8">
          <CardHeader>
            <CardTitle className="text-hikma-accent">Principes Urbanistiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <Building className="h-8 w-8 mx-auto text-hikma-accent mb-2" />
                <h3 className="text-white font-bold mb-2">Wakf</h3>
                <p className="text-hikma-sand">Système de dotation pour les biens publics</p>
              </div>
              <div className="text-center">
                <Home className="h-8 w-8 mx-auto text-hikma-accent mb-2" />
                <h3 className="text-white font-bold mb-2">Hammam</h3>
                <p className="text-hikma-sand">Bains publics et lieu de socialisation</p>
              </div>
              <div className="text-center">
                <School className="h-8 w-8 mx-auto text-hikma-accent mb-2" />
                <h3 className="text-white font-bold mb-2">Souk</h3>
                <p className="text-hikma-sand">Organisation économique et sociale</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedCity} onOpenChange={() => setSelectedCity(null)}>
        <DialogContent className="bg-hikma-primary border-hikma-accent">
          <DialogHeader>
            <DialogTitle className="text-hikma-accent">{selectedCity}</DialogTitle>
          </DialogHeader>
          <div className="text-hikma-sand">
            <p>Visite virtuelle en développement...</p>
            <p>Bientôt : Explorez les rues et monuments historiques en 3D</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VillesSection;
