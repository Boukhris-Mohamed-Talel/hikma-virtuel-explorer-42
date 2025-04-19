
interface ScholarProps {
  name: string;
  description: string;
  period: string;
  onClick: () => void;
}

const Scholar = ({ name, description, period, onClick }: ScholarProps) => {
  return (
    <div 
      className="relative w-52 h-72 bg-hikma-primary/60 backdrop-blur-sm border border-hikma-accent/50 rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hikma-primary opacity-80"></div>
      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-xs text-hikma-accent mb-2">{period}</p>
        <p className="text-xs line-clamp-2">{description}</p>
      </div>
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-hikma-accent/20 blur-md"></div>
    </div>
  );
};

export default Scholar;
