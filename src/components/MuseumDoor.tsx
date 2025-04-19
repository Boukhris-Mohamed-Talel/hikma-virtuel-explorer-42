
interface MuseumDoorProps {
  title: string;
  onClick: () => void;
}

const MuseumDoor = ({ title, onClick }: MuseumDoorProps) => {
  return (
    <div 
      className="door bg-hikma-secondary/50 backdrop-blur-sm border-2 border-hikma-accent rounded-lg w-64 h-96 flex flex-col items-center justify-center p-6 cursor-pointer glow"
      onClick={onClick}
    >
      <div className="h-2/3 flex items-center justify-center">
        <div className="w-16 h-24 border-2 border-hikma-accent rounded-t-full" />
      </div>
      <div className="mt-auto text-center">
        <h3 className="text-xl text-hikma-accent font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default MuseumDoor;
