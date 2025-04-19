
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Hospital, Bandage, Ambulance } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";

const SanteSection = ({ onBack }: { onBack: () => void }) => {
  const { toast } = useToast();
  const [showBimaristan, setShowBimaristan] = useState(false);

  const playHealingSound = () => {
    const audio = new Audio('/healing-chant.mp3');
    audio.play();
  };

  const remedesTraditionels = [
    {
      nom: "Miel et Nigelle",
      description: "Une combinaison puissante utilisée pour renforcer l'immunité",
      icon: <Bandage className="h-6 w-6 text-hikma-accent" />
    },
    {
      nom: "Hijama",
      description: "Technique de ventouses pour soulager les douleurs musculaires",
      icon: <Hospital className="h-6 w-6 text-hikma-accent" />
    },
    {
      nom: "Eau de Rose",
      description: "Utilisée pour ses propriétés apaisantes et anti-inflammatoires",
      icon: <Ambulance className="h-6 w-6 text-hikma-accent" />
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent">
            <CardHeader>
              <CardTitle className="text-hikma-accent">Le Bimaristan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-hikma-sand mb-4">
                Découvrez l'hôpital médiéval islamique, un lieu où science et spiritualité se rencontrent.
              </p>
              <img 
                src="/photo-1472396961693-142e6e269027" 
                alt="Ancien Bimaristan"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
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
                    <HoverCardContent className="bg-hikma-primary border-hikma-accent">
                      <p className="text-hikma-sand">{remede.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Button
          onClick={playHealingSound}
          className="mx-auto block mb-8 bg-hikma-accent hover:bg-hikma-accent/80"
        >
          Écouter un chant de guérison
        </Button>

        <Dialog open={showBimaristan} onOpenChange={setShowBimaristan}>
          <DialogContent className="bg-hikma-primary border-hikma-accent">
            <DialogHeader>
              <DialogTitle className="text-hikma-accent">Bimaristan Virtuel</DialogTitle>
            </DialogHeader>
            <div className="text-hikma-sand">
              <p>Fonctionnalité en développement...</p>
              <p>Bientôt : Visite virtuelle 3D d'un Bimaristan médiéval</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SanteSection;
