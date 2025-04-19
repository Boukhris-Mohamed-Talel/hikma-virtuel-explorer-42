import { useState, useEffect } from "react";
import StarryBackground from "./StarryBackground";
import Introduction from "./Introduction";
import ProblemStatement from "./ProblemStatement";
import SdgSection from "./SdgSection";
import MuseumMap from "./MuseumMap";
import SavoirSection from "./SavoirSection";
import SanteSection from "./SanteSection";
import VillesSection from "./VillesSection";

type Stage = "intro" | "problem" | "sdg" | "map" | "section";

const Hall = () => {
  const [stage, setStage] = useState<Stage>("intro");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
  const handleIntroComplete = () => {
    setStage("problem");
  };
  
  const handleProblemComplete = () => {
    setStage("sdg");
  };
  
  const handleSdgComplete = () => {
    setStage("map");
  };
  
  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
    setStage("section");
  };
  
  const handleBackToMap = () => {
    setSelectedSection(null);
    setStage("map");
  };
  
  const renderSectionContent = () => {
    if (!selectedSection) return null;
    
    switch (selectedSection) {
      case "savoir":
        return <SavoirSection onBack={handleBackToMap} />;
      case "sante":
        return <SanteSection onBack={handleBackToMap} />;
      case "villes":
        return <VillesSection onBack={handleBackToMap} />;
      default:
        return (
          <div className="min-h-screen w-full celestial-bg p-8 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl text-hikma-accent font-bold mb-4">
                Section en développement
              </h1>
              <p className="text-white mb-8">
                Cette section sera disponible prochainement.
              </p>
              <button 
                onClick={handleBackToMap} 
                className="px-6 py-2 bg-hikma-secondary text-white rounded-md hover:bg-hikma-primary"
              >
                Retour à la carte
              </button>
            </div>
          </div>
        );
    }
  };
  
  if (stage === "section") {
    return renderSectionContent();
  }

  return (
    <div className="relative min-h-screen w-full celestial-bg overflow-hidden">
      <StarryBackground />
      
      {stage === "intro" && <Introduction onComplete={handleIntroComplete} />}
      {stage === "problem" && <ProblemStatement onComplete={handleProblemComplete} />}
      {stage === "sdg" && <SdgSection onComplete={handleSdgComplete} />}
      {stage === "map" && <MuseumMap onSelectSection={handleSectionSelect} />}
    </div>
  );
};

export default Hall;
