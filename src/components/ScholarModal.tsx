
import { useState, useEffect } from "react";

interface ScholarModalProps {
  name: string;
  description: string;
  period: string;
  contributions: string[];
  onClose: () => void;
}

const ScholarModal = ({ name, description, period, contributions, onClose }: ScholarModalProps) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
    
    // Close on ESC key
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center bg-black/70 z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className="bg-hikma-primary/90 backdrop-blur-md border border-hikma-accent rounded-lg max-w-xl w-full p-6 m-4 transition-transform duration-300 transform origin-center"
        style={{ transform: visible ? 'scale(1)' : 'scale(0.9)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-hikma-accent">{name}</h2>
            <p className="text-hikma-sand">{period}</p>
          </div>
          <button 
            className="text-white hover:text-hikma-accent"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-white mb-4">{description}</p>
          
          <h3 className="text-lg font-semibold text-hikma-accent mb-2">Contributions</h3>
          <ul className="list-disc list-inside text-white">
            {contributions.map((contribution, idx) => (
              <li key={idx} className="mb-1">{contribution}</li>
            ))}
          </ul>
        </div>
        
        <div className="story-insta">
          <div className="flex items-center justify-center gap-2 text-xs text-hikma-sand">
            <div className="w-32 h-1 bg-hikma-sand/30 rounded-full">
              <div className="w-2/3 h-full bg-hikma-accent rounded-full"></div>
            </div>
            <span>Histoire</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarModal;
