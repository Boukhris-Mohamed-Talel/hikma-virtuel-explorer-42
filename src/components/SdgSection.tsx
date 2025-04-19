
import { useState, useEffect } from "react";

interface SdgProps {
  onComplete: () => void;
}

const SdgSection = ({ onComplete }: SdgProps) => {
  const [visibleItems, setVisibleItems] = useState(0);
  
  const sdgs = [
    { emoji: "📚", title: "ODD 4 : Éducation de qualité" },
    { emoji: "🧠", title: "ODD 3 : Santé et bien-être" },
    { emoji: "🏙️", title: "ODD 11 : Villes et communautés durables" }
  ];
  
  useEffect(() => {
    if (visibleItems < sdgs.length) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(completeTimer);
    }
  }, [visibleItems, sdgs.length, onComplete]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-30">
      <div className="flex flex-col gap-6 items-center">
        {sdgs.slice(0, visibleItems).map((sdg, index) => (
          <div 
            key={index} 
            className="reveal bg-white/10 backdrop-blur-md rounded-full px-8 py-4 flex items-center gap-4 glow"
          >
            <span className="text-4xl">{sdg.emoji}</span>
            <span className="text-xl text-white font-medium">{sdg.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SdgSection;
