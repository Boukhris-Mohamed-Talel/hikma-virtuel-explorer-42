
import { useState, useEffect } from "react";

interface ProblemStatementProps {
  onComplete: () => void;
}

const ProblemStatement = ({ onComplete }: ProblemStatementProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-20 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="parchment p-8 rounded-lg max-w-2xl unfold">
        <h2 className="text-2xl text-hikma-primary font-semibold mb-4">Et si la lumière du passé pouvait éclairer les chemins de demain ?</h2>
        <p className="text-lg text-hikma-dark">
          À travers les trésors de l'âge d'or islamique, Hikma invite les esprits curieux à redécouvrir 
          un héritage souvent oublié, mais essentiel pour construire un monde plus juste, durable et humain.
        </p>
      </div>
    </div>
  );
};

export default ProblemStatement;
