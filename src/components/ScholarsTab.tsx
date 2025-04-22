
import { useState } from "react";
import ScholarsGrid from "./ScholarsGrid";
import ScholarModal from "./ScholarModal";

interface Scholar {
  id: string;
  name: string;
  period: string;
  description: string;
  contributions: string[];
  image: string;
}

interface ScholarsTabProps {
  data: Scholar[];
}

const ScholarsTab = ({ data }: ScholarsTabProps) => {
  const [selectedScholar, setSelectedScholar] = useState<Scholar | null>(null);

  return (
    <>
      <ScholarsGrid 
        scholars={data}
        onSelect={setSelectedScholar}
      />
      {selectedScholar && (
        <ScholarModal 
          name={selectedScholar.name}
          description={selectedScholar.description}
          period={selectedScholar.period}
          contributions={selectedScholar.contributions}
          image={selectedScholar.image}
          onClose={() => setSelectedScholar(null)}
        />
      )}
    </>
  );
};

export default ScholarsTab;
