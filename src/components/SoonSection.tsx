
import { Circle } from "lucide-react";

const SoonSection = () => (
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
);

export default SoonSection;
