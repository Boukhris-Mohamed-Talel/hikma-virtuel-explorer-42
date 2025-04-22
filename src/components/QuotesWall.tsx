
import { useState, useEffect } from "react";
import { Volume2, Star } from "lucide-react";
import { Button } from "./ui/button";

interface Quote {
  id: number;
  text: string;
  author: string;
  translation: string;
  explanation: string;
  sdgLink: string;
}

const QuotesWall = () => {
  const [activeQuote, setActiveQuote] = useState<Quote | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  const quotes: Quote[] = [
    {
      id: 1,
      text: "اطلبوا العلم ولو في الصين",
      author: "حديث منسوب للنبي محمد",
      translation: "Cherche la connaissance, même jusqu'en Chine.",
      explanation: "Cette citation, attribuée au prophète Muhammad, souligne que l'apprentissage n'a pas de frontières. Aller en Chine symbolise la volonté de chercher le savoir même loin, même si c'est difficile. Aujourd'hui, cela encourage les jeunes à être curieux et ouverts sur le monde.",
      sdgLink: "ODD 4: Éducation de qualité - Promouvoir l'éducation pour tous, sans barrières géographiques."
    },
    {
      id: 2,
      text: "يموت الإنسان بموت أشواقه",
      author: "ابن سينا (أفيسين)",
      translation: "L'homme meurt quand meurt son aspiration.",
      explanation: "Ibn Sina nous rappelle ici l'importance de garder vivante notre soif de connaissance et notre curiosité. Sans aspirations ni rêves, notre vie perd son sens. Cette philosophie résonne aujourd'hui dans notre quête d'épanouissement personnel et d'apprentissage tout au long de la vie.",
      sdgLink: "ODD 3: Bonne santé et bien-être - L'importance de la santé mentale et de l'épanouissement personnel."
    },
    {
      id: 3,
      text: "من كان عاقلا لم يكن من عقله شيء أضر عليه من الجهل",
      author: "الخوارزمي",
      translation: "Pour une personne sage, rien n'est plus nuisible que l'ignorance.",
      explanation: "Al-Khawarizmi souligne le danger de l'ignorance, même pour les personnes éduquées. Cette sagesse nous rappelle l'importance de l'humilité intellectuelle et de l'apprentissage continu, particulièrement pertinente à l'ère de la désinformation.",
      sdgLink: "ODD 16: Paix, justice et institutions efficaces - Lutter contre la désinformation pour une société plus juste."
    },
    {
      id: 4,
      text: "الكلام نقش الروح على صحيفة الهواء",
      author: "ابن رشد (أفيروس)",
      translation: "La parole est l'inscription de l'âme sur la page de l'air.",
      explanation: "Cette métaphore poétique d'Ibn Rushd évoque la puissance des mots et leur capacité à transmettre notre essence intérieure. Elle nous invite à réfléchir sur la façon dont nous communiquons et l'impact de nos paroles sur les autres et sur notre environnement.",
      sdgLink: "ODD 17: Partenariats pour la réalisation des objectifs - L'importance du dialogue et de la communication dans la coopération mondiale."
    },
    {
      id: 5,
      text: "تدرك الأشياء بأضدادها",
      author: "الفارابي",
      translation: "On comprend les choses par leurs opposés.",
      explanation: "Al-Farabi exprime ici un principe dialectique fondamental : nous comprenons mieux un concept en le comparant à son contraire. Cette sagesse nous invite à considérer différentes perspectives et à valoriser la diversité des points de vue pour une compréhension plus complète du monde.",
      sdgLink: "ODD 10: Réduction des inégalités - Valoriser la diversité des perspectives pour une société plus inclusive."
    }
  ];
  
  useEffect(() => {
    // Start with a random quote after component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    showQuote(quotes[randomIndex]);
    
    // Rotate quotes every 15 seconds
    const interval = setInterval(() => {
      const nextIndex = (quotes.findIndex(q => q.id === activeQuote?.id) + 1) % quotes.length;
      showQuote(quotes[nextIndex]);
    }, 15000);
    
    return () => clearInterval(interval);
  }, [activeQuote]);
  
  const showQuote = (quote: Quote) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveQuote(quote);
      setIsAnimating(false);
    }, 1000);
  };
  
  const playAudio = () => {
    // Placeholder for audio functionality
    setIsAudioPlaying(!isAudioPlaying);
    setTimeout(() => {
      setIsAudioPlaying(false);
    }, 5000);
  };
  
  if (!activeQuote) return null;
  
  return (
    <div className="relative w-full max-w-5xl mx-auto p-6 backdrop-blur-md rounded-lg overflow-hidden border border-hikma-accent/30">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-hikma-accent/20 rounded-full blur-xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-hikma-accent/20 rounded-full blur-xl z-0"></div>
      
      <h2 className="text-2xl font-semibold text-hikma-accent mb-6 relative z-10 flex items-center">
        <Star className="mr-2 h-5 w-5" />
        Mur des citations en calligraphie
      </h2>
      
      <div 
        className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="mb-6 py-8 px-4 text-center">
          <p className="arabic-font text-4xl md:text-5xl text-hikma-accent mb-2" style={{ direction: 'rtl' }}>
            {activeQuote.text}
          </p>
          <p className="text-hikma-sand mt-4">
            — {activeQuote.author}
          </p>
        </div>
        
        <div className="max-w-3xl bg-hikma-primary/60 backdrop-blur-sm p-4 rounded-lg border border-hikma-accent/30 animate-fade-in">
          <p className="text-white text-xl mb-4 text-center font-medium">
            "{activeQuote.translation}"
          </p>
          
          <div className="flex justify-center mb-4">
            <Button 
              onClick={playAudio}
              variant="outline" 
              className="border-hikma-accent text-hikma-accent hover:bg-hikma-accent hover:text-hikma-primary"
              size="sm"
            >
              <Volume2 className={`mr-2 h-4 w-4 ${isAudioPlaying ? 'animate-pulse' : ''}`} />
              Écouter l'explication
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-hikma-accent pl-4">
              <p className="text-hikma-sand">{activeQuote.explanation}</p>
            </div>
            
            <div className="bg-hikma-secondary/20 p-3 rounded-lg">
              <p className="text-white text-sm">
                <span className="font-medium text-hikma-accent">Lien avec les ODD:</span> {activeQuote.sdgLink}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {quotes.map((quote) => (
            <button
              key={quote.id}
              className={`w-3 h-3 rounded-full transition-all ${activeQuote.id === quote.id ? 'bg-hikma-accent scale-125' : 'bg-hikma-sand/30 hover:bg-hikma-sand/50'}`}
              onClick={() => showQuote(quote)}
              aria-label={`Citation ${quote.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesWall;
