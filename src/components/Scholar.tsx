
interface ScholarProps {
  name: string;
  description: string;
  period: string;
  image: string;
  onClick: () => void;
}

const Scholar = ({ name, description, period, image, onClick }: ScholarProps) => {
  return (
    <div 
      className="relative w-64 h-80 bg-hikma-primary/60 backdrop-blur-sm border border-hikma-accent/50 rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 overflow-hidden"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hikma-primary/60 to-hikma-primary opacity-80 z-10"></div>
      <div className="absolute bottom-4 left-4 right-4 text-white z-20">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-xs text-hikma-accent mb-2">{period}</p>
        <p className="text-xs line-clamp-3">{description}</p>
      </div>
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-hikma-accent/20 blur-md z-5"></div>
    </div>
  );
};

export default Scholar;
