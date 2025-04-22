
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Circle, Video, Lightbulb, Clock } from "lucide-react";
import VideoPreview from "./VideoPreview";

interface ScholarModalProps {
  name: string;
  description: string;
  period: string;
  contributions: string[];
  image: string;
  onClose: () => void;
}

const ScholarModal = ({ name, description, period, contributions, image, onClose }: ScholarModalProps) => {
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [activeTab, setActiveTab] = useState<'bio' | 'video' | 'funfacts' | 'relevance'>('bio');
  
  useEffect(() => {
    setVisible(true);
    const newAudio = new Audio('/scholar-narration.mp3');
    setAudio(newAudio);
    
    // Close on ESC key
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);
  
  const handleClose = () => {
    if (audio) {
      audio.pause();
    }
    setVisible(false);
    setTimeout(onClose, 300);
  };
  
  const toggleAudio = () => {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  // Fun facts for each scholar
  const getFunFacts = () => {
    switch (name) {
      case "Ibn Sina (Avicenne)":
        return [
          "Il a écrit le Canon de la médecine à seulement 21 ans!",
          "Il a identifié que les maladies pouvaient se propager par l'eau et le sol bien avant la découverte des microbes.",
          "Il a décrit avec précision les symptômes et complications du diabète au 11ème siècle.",
          "Il travaillait comme médecin le jour et écrivait ses traités scientifiques la nuit."
        ];
      case "Al-Khawarizmi":
        return [
          "Le mot 'algorithme' vient directement de son nom!",
          "Il a introduit le concept du zéro en mathématiques occidentales.",
          "Il a créé les premières équations quadratiques et montré comment les résoudre.",
          "Il a développé des instruments astronomiques pour calculer précisément la position des étoiles."
        ];
      case "Al-Farabi":
        return [
          "Il parlait plus de 70 langues!",
          "On l'appelait le 'Second Maître' (après Aristote).",
          "Il a créé des instruments de musique innovants et développé une théorie musicale mathématique.",
          "Il pouvait jouer sa propre musique qui, selon les témoignages, pouvait faire rire ou pleurer son public à volonté."
        ];
      case "Ibn Rushd (Averroès)":
        return [
          "Ses commentaires sur Aristote étaient si précis qu'on l'appelait 'Le Commentateur'.",
          "Il a influencé Thomas d'Aquin et toute la philosophie occidentale médiévale.",
          "Il était à la fois juge, médecin et astronome.",
          "Dante l'a placé au Limbe dans sa Divine Comédie, parmi les 'esprits magnanimes'."
        ];
      default:
        return ["Chargement des faits intéressants..."];
    }
  };

  // Modern relevance
  const getModernRelevance = () => {
    switch (name) {
      case "Ibn Sina (Avicenne)":
        return "Ses méthodes cliniques d'observation et de diagnostic sont toujours enseignées en médecine moderne. Son approche holistique du traitement des patients influence aujourd'hui la médecine intégrative. Plusieurs médicaments qu'il a décrits sont encore utilisés sous des formes modifiées.";
      case "Al-Khawarizmi":
        return "Sans ses algorithmes, nous n'aurions pas Google, l'IA ou même les smartphones! Ses formules mathématiques sont à la base de l'informatique moderne, et sa méthode de résolution d'équations est enseignée dans toutes les écoles.";
      case "Al-Farabi":
        return "Sa théorie de l'harmonie musicale a influencé le développement de la musique occidentale. Ses idées sur la société idéale influencent encore les théories politiques modernes. Sa façon d'intégrer la science, la philosophie et les arts est un modèle pour l'éducation interdisciplinaire.";
      case "Ibn Rushd (Averroès)":
        return "Son plaidoyer pour la compatibilité entre religion et raison reste pertinent dans les débats contemporains. Sa défense de la pensée rationnelle a contribué à l'émergence des Lumières en Europe. Ses commentaires sur Aristote ont jeté les bases de la méthode scientifique moderne.";
      default:
        return "Chargement de l'information...";
    }
  };

  // Get modern comparison
  const getModernComparison = () => {
    switch (name) {
      case "Ibn Sina (Avicenne)":
        return "Un influenceur bien-être entre TEDx et Dr. Good, avec des millions d'abonnés à ses conseils santé!";
      case "Al-Khawarizmi":
        return "Un développeur star chez Google qui inventerait des algorithmes révolutionnaires et donnerait des conférences TED.";
      case "Al-Farabi":
        return "Un compositeur visionnaire comme Hans Zimmer combiné à un philosophe comme Yuval Noah Harari.";
      case "Ibn Rushd (Averroès)":
        return "Un juge à la Cour Suprême qui écrirait des best-sellers de philosophie et apparaîtrait dans des podcasts populaires.";
      default:
        return "Chargement de la comparaison...";
    }
  };

  // Get video URL based on scholar
  const getVideoUrl = () => {
    switch (name) {
      case "Ibn Sina (Avicenne)":
        return "https://www.youtube.com/embed/qJGrh7GzuYw";
      case "Al-Khawarizmi":
        return "https://www.youtube.com/embed/qJGrh7GzuYw";
      case "Al-Farabi":
        return "https://www.youtube.com/embed/qJGrh7GzuYw";
      case "Ibn Rushd (Averroès)":
        return "https://www.youtube.com/embed/qJGrh7GzuYw";
      default:
        return "https://www.youtube.com/embed/qJGrh7GzuYw";
    }
  };
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 transition-opacity duration-300 overflow-y-auto py-10"
      style={{ opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      <div 
        className="bg-hikma-primary/90 backdrop-blur-md border border-hikma-accent rounded-lg max-w-4xl w-full m-4 transition-transform duration-300 transform origin-center"
        style={{ transform: visible ? 'scale(1)' : 'scale(0.9)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button 
            className="absolute top-4 right-4 text-white hover:text-hikma-accent z-10"
            onClick={handleClose}
          >
            ✕
          </button>
          
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 p-6">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4 border-4 border-hikma-accent">
                <img src={image} alt={name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  className="w-full bg-hikma-accent hover:bg-hikma-accent/80"
                  onClick={toggleAudio}
                >
                  {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                  {isPlaying ? "Pause narration" : "Écouter narration"}
                </Button>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button 
                    variant={activeTab === 'bio' ? "default" : "outline"}
                    className={activeTab === 'bio' ? "bg-hikma-secondary" : "border-hikma-secondary text-hikma-sand"}
                    onClick={() => setActiveTab('bio')}
                  >
                    Biographie
                  </Button>
                  <Button 
                    variant={activeTab === 'video' ? "default" : "outline"}
                    className={activeTab === 'video' ? "bg-hikma-secondary" : "border-hikma-secondary text-hikma-sand"}
                    onClick={() => setActiveTab('video')}
                  >
                    <Video className="mr-2 h-4 w-4" />
                    Vidéo
                  </Button>
                  <Button 
                    variant={activeTab === 'funfacts' ? "default" : "outline"}
                    className={activeTab === 'funfacts' ? "bg-hikma-secondary" : "border-hikma-secondary text-hikma-sand"}
                    onClick={() => setActiveTab('funfacts')}
                  >
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Fun Facts
                  </Button>
                  <Button 
                    variant={activeTab === 'relevance' ? "default" : "outline"}
                    className={activeTab === 'relevance' ? "bg-hikma-secondary" : "border-hikma-secondary text-hikma-sand"}
                    onClick={() => setActiveTab('relevance')}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Aujourd'hui
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 p-6">
              <h2 className="text-2xl font-bold text-hikma-accent">{name}</h2>
              <p className="text-hikma-sand mb-4">{period}</p>
              
              {activeTab === 'bio' && (
                <>
                  <p className="text-white mb-4">{description}</p>
                  
                  <h3 className="text-lg font-semibold text-hikma-accent mb-2">Contributions</h3>
                  <ul className="list-disc list-inside text-white">
                    {contributions.map((contribution, idx) => (
                      <li key={idx} className="mb-1">{contribution}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 p-3 bg-hikma-secondary/30 rounded-lg">
                    <p className="text-hikma-sand text-sm italic">
                      "La science est l'âme de la prospérité des nations et la source de vie de toute civilisation."
                    </p>
                  </div>
                </>
              )}
              
              {activeTab === 'video' && (
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-hikma-accent mb-2">
                    Découvrez {name.split('(')[0]} en vidéo
                  </h3>
                  <div className="aspect-video mt-2 flex-grow">
                    <iframe
                      width="100%"
                      height="100%"
                      src={getVideoUrl()}
                      title={`Vidéo de ${name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 'funfacts' && (
                <div>
                  <h3 className="text-lg font-semibold text-hikma-accent mb-4">Fun Facts sur {name.split('(')[0]}</h3>
                  <ul className="space-y-4">
                    {getFunFacts().map((fact, idx) => (
                      <li key={idx} className="bg-hikma-secondary/20 p-3 rounded-lg flex items-start">
                        <span className="text-hikma-accent text-xl mr-2">★</span>
                        <span className="text-white">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'relevance' && (
                <div>
                  <h3 className="text-lg font-semibold text-hikma-accent mb-2">Pertinence aujourd'hui</h3>
                  <p className="text-white mb-6">{getModernRelevance()}</p>
                  
                  <h3 className="text-lg font-semibold text-hikma-accent mb-2">Savant VS Aujourd'hui</h3>
                  <div className="bg-hikma-secondary/20 p-4 rounded-lg border-l-4 border-hikma-accent">
                    <p className="text-white text-lg font-medium">
                      {name.split('(')[0]} aujourd'hui serait...
                    </p>
                    <p className="text-hikma-sand text-xl mt-2 italic">
                      {getModernComparison()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {activeTab === 'bio' && (
            <div className="p-6 border-t border-hikma-accent/30">
              <h3 className="text-lg font-semibold text-hikma-accent mb-2">Œuvres principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {name === "Ibn Sina (Avicenne)" && (
                  <>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Le Canon de la Médecine</h4>
                      <p className="text-hikma-sand text-xs">Une encyclopédie médicale qui a fait autorité pendant plus de 700 ans</p>
                    </div>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Le Livre de la Guérison</h4>
                      <p className="text-hikma-sand text-xs">Ouvrage philosophique traitant de logique, métaphysique et sciences naturelles</p>
                    </div>
                  </>
                )}
                {name === "Al-Khawarizmi" && (
                  <>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Kitab al-Jabr</h4>
                      <p className="text-hikma-sand text-xs">Premier traité d'algèbre qui a donné son nom à cette discipline</p>
                    </div>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Livre du calcul indien</h4>
                      <p className="text-hikma-sand text-xs">Introduction du système décimal et de l'algorithme dans le monde arabe</p>
                    </div>
                  </>
                )}
                {name === "Al-Farabi" && (
                  <>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Traité des opinions des habitants de la cité vertueuse</h4>
                      <p className="text-hikma-sand text-xs">Vision utopique d'une société idéale</p>
                    </div>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Grand Livre de la Musique</h4>
                      <p className="text-hikma-sand text-xs">Théorie musicale et acoustique scientifique</p>
                    </div>
                  </>
                )}
                {name === "Ibn Rushd (Averroès)" && (
                  <>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Commentaires sur Aristote</h4>
                      <p className="text-hikma-sand text-xs">Commentaires détaillés qui ont influencé la pensée occidentale</p>
                    </div>
                    <div className="p-2 bg-hikma-secondary/20 rounded">
                      <h4 className="text-white font-medium">Incohérence de l'Incohérence</h4>
                      <p className="text-hikma-sand text-xs">Réponse à Al-Ghazali défendant la philosophie rationnelle</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScholarModal;
