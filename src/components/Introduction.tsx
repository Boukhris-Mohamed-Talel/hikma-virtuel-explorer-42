
import { useState, useEffect } from "react";

interface IntroductionProps {
  onComplete: () => void;
}

const Introduction = ({ onComplete }: IntroductionProps) => {
  const [visible, setVisible] = useState(false);
  const [introText, setIntroText] = useState("");
  
  const fullText = "Bienvenue à Hikma, un musée pas comme les autres. Ici, les murs sont faits de mémoire, les chemins de savoir, et l'avenir se dessine dans la lumière du passé.";
  
  useEffect(() => {
    setVisible(true);
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setIntroText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        // When text reveal is complete, trigger a timer to move to next stage
        setTimeout(onComplete, 2000);
      }
    }, 50);
    
    return () => clearInterval(intervalId);
  }, [onComplete, fullText]);
  
  return (
    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 z-10 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-hikma-accent arabic-font">HIKMA</h1>
        <p className="text-xl md:text-2xl text-white">
          {introText}
          <span className="animate-pulse ml-1">|</span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
