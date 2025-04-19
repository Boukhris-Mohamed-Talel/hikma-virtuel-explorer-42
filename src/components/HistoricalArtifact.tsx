
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Image } from "lucide-react";

interface HistoricalArtifactProps {
  title: string;
  description: string;
  image: string;
  period: string;
}

const HistoricalArtifact = ({ title, description, image, period }: HistoricalArtifactProps) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <Card 
        className="bg-hikma-primary/60 backdrop-blur-sm border-hikma-accent hover:scale-105 transition-transform cursor-pointer"
        onClick={() => setShowDetail(true)}
      >
        <CardContent className="p-4">
          <div className="relative w-full h-48 mb-4">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hikma-primary/80 to-transparent" />
          </div>
          <h3 className="text-hikma-accent font-medium text-lg mb-1">{title}</h3>
          <p className="text-hikma-sand text-sm">{period}</p>
        </CardContent>
      </Card>

      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="bg-hikma-primary border-hikma-accent max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-hikma-accent flex items-center gap-2">
              <Image className="h-5 w-5" />
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-hikma-sand mb-2">{description}</p>
            <p className="text-hikma-accent text-sm">{period}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HistoricalArtifact;
