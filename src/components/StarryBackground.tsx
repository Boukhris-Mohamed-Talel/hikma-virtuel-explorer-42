
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: string;
  y: string;
  size: string;
  delay: string;
  duration: string;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const starCount = 100;
    const newStars: Star[] = [];
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: `${0.5 + Math.random() * 3}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 5}s`
      });
    }
    
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
