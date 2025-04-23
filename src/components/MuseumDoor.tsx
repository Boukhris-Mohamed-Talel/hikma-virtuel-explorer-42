
import { useState } from "react";

interface MuseumDoorProps {
  title: string;
  onClick: () => void;
}

const MuseumDoor = ({ title, onClick }: MuseumDoorProps) => {
  const [isOpening, setIsOpening] = useState(false);
  
  const handleDoorClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onClick();
      setIsOpening(false);
    }, 1000); // Wait for the animation to complete before navigation
  };
  
  return (
    <div className="museum-door-container h-[450px] w-[280px] relative">
      {/* Door Frame */}
      <div className="door-frame absolute inset-0 border-8 border-[#5D4037] rounded-t-lg shadow-lg z-0">
        <div className="absolute -left-5 -right-5 -top-5 h-8 bg-[#3E2723] rounded-t-lg"></div>
      </div>
      
      {/* Door */}
      <div 
        className={`wooden-door absolute inset-0 bg-gradient-to-b from-[#8D6E63] to-[#5D4037] rounded-t-lg flex flex-col p-4 cursor-pointer transition-all duration-1000 origin-left shadow-md hover:shadow-xl
          ${isOpening ? 'door-opening' : ''}
        `}
        onClick={handleDoorClick}
        style={{
          boxShadow: "inset 0px 0px 20px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.2)"
        }}
      >
        {/* Wood Grain Texture - Vertical Panels */}
        <div className="wood-panels flex h-full">
          <div className="panel h-full w-1/2 border-r border-[#3E2723]/40 px-2">
            <div className="h-full bg-[#8D6E63]/30 rounded border border-[#3E2723]/20"></div>
          </div>
          <div className="panel h-full w-1/2 px-2">
            <div className="h-full bg-[#8D6E63]/30 rounded border border-[#3E2723]/20"></div>
          </div>
        </div>
        
        {/* Door Handles - Two metal ring handles */}
        <div className="door-handles absolute flex justify-between left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="door-handle left-handle w-12 h-12 rounded-full border-4 border-[#A1887F] bg-[#8D6E63]/50 shadow-inner flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#5D4037] shadow-inner"></div>
          </div>
          <div className="door-handle right-handle w-12 h-12 rounded-full border-4 border-[#A1887F] bg-[#8D6E63]/50 shadow-inner flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#5D4037] shadow-inner"></div>
          </div>
        </div>

        {/* Name Plate */}
        <div className="name-plate absolute bottom-20 left-1/2 -translate-x-1/2 w-[85%] bg-[#F8D171] border-4 border-[#5D4037] rounded p-3 transform shadow-md z-10 pointer-events-none">
          <h3 className="text-[#3E2723] font-amiri text-xl font-bold text-center">{title}</h3>
        </div>
      </div>

      {/* Walk-through Animation Overlay */}
      <div className={`absolute inset-0 bg-white opacity-0 z-20 pointer-events-none ${isOpening ? 'walk-through-animation' : ''}`}></div>
    </div>
  );
};

export default MuseumDoor;
