
import Scholar from "./Scholar";

interface Scholar {
  id: string;
  name: string;
  period: string;
  description: string;
  contributions: string[];
  image: string;
}

interface ScholarsGridProps {
  scholars: Scholar[];
  onSelect: (scholar: Scholar) => void;
}

const ScholarsGrid = ({ scholars, onSelect }: ScholarsGridProps) => (
  <div>
    <h2 className="text-2xl text-white font-semibold mb-6 flex items-center">
      <span className="text-hikma-accent mr-2 h-4 w-4">●</span>
      Portraits interactifs de savants
    </h2>
    <p className="text-hikma-sand mb-6 text-center bg-hikma-primary/40 p-3 rounded-lg border border-hikma-accent/30">
      Cliquez sur un savant pour découvrir sa biographie, une vidéo courte, des fun facts sur ses découvertes et pourquoi son travail est encore utile aujourd'hui.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
      {scholars.map((scholar) => (
        <Scholar 
          key={scholar.id}
          name={scholar.name}
          description={scholar.description}
          period={scholar.period}
          image={scholar.image}
          onClick={() => onSelect(scholar)}
        />
      ))}
    </div>
  </div>
);

export default ScholarsGrid;
