
import { Clapperboard, Hash, ThumbsUp, Play } from "lucide-react";

const scholars = [
  {
    id: "ibn-sina",
    name: "Ibn Sina (Avicenne)",
    color: "bg-white/80",
    img: "/lovable-uploads/efb3b311-4fa9-4df6-b124-798a6e78a5e4.png",
    imageSection: 0, // left
    tiktok: [
      { icon: "🎥", text: '[transition type "glow up"]' },
      { icon: "📲", text: "Yo les amis, ici Ibn Sina, aka Avicenne, toubib des toubibs 👨‍⚕️💫" },
      { icon: "💬", text: "Tu tousses ? T’inquiète, j’ai écrit Le Canon de la Médecine avant que ça soit stylé. Et devine quoi ? J’ai aussi parlé de santé mentale y’a 1000 ans. Pas mal pour un gars du XIe siècle, hein ?" }
    ],
    future: [
      { icon: "🔮", text: "Aujourd’hui ?" },
      { icon: "✨", text: "C’est LE Dr Good version halal ! TEDx, podcast, conseils ayurvédiques revisités, tips sur le sommeil et même une collab avec Doctolib." },
      { icon: "📈", text: "5M d’abonnés sur Insta. DM ouverts pour un diagnostic 💌" }
    ]
  },
  {
    id: "al-khwarizmi",
    name: "Al-Khwarizmi",
    color: "bg-yellow-100/90",
    img: "/lovable-uploads/efb3b311-4fa9-4df6-b124-798a6e78a5e4.png",
    imageSection: 1, // center
    tiktok: [
      { icon: "🎥", text: '[cut rapide façon “dev life”]' },
      { icon: "📲", text: "Al-Khwarizmi ici, ou juste ‘Algo’ pour les potes de la Silicon Valley 👨‍💻" },
      { icon: "💬", text: "Tu kiffes les algorithmes Insta, YouTube ou TikTok ? Bah devine quoi : c’est moi le daron de tout ça 😎" }
    ],
    future: [
      { icon: "🚀", text: "Aujourd’hui ?" },
      { icon: "💻", text: "Il code chez Google, mais chill sur Twitch le soir pour expliquer les maths comme un boss." },
      { icon: "📊", text: "Il a une appli pour aider les élèves à kiffer les équations (et il bug jamais, lui)." }
    ]
  },
  {
    id: "al-biruni",
    name: "Al-Biruni",
    color: "bg-blue-100/80",
    img: "/lovable-uploads/efb3b311-4fa9-4df6-b124-798a6e78a5e4.png",
    imageSection: 2, // right
    tiktok: [
      { icon: "🎥", text: '[transition avec une galaxie qui s’ouvre]' },
      { icon: "📲", text: "Salam ! C’est Al-Biruni, l’astronome OG 🌠🔭" },
      { icon: "💬", text: "J’ai mesuré la circonférence de la Terre... avec un bâton. Et toi t’as une calculette pour compter ta note au partiel ? 😂" }
    ],
    future: [
      { icon: "🌍", text: "Aujourd’hui ?" },
      { icon: "📺", text: "C’est le Neil deGrasse Tyson du monde arabe. Il anime une série Netflix style Cosmos, mais avec plus de turbans et de télescopes artisanaux." },
      { icon: "🔮", text: "Entre deux explications sur la gravité, il drop des punchlines philosophiques sur l’origine de l’univers." }
    ]
  }
];

const ModernTikTokTab = () => (
  <div>
    <h2 className="text-2xl text-white font-semibold mb-4 flex items-center">
      <span className="text-hikma-accent mr-2 h-4 w-4">●</span>
      🎬 TikTok : “Et si ces génies de l’âge d’or islamique vivaient en 2025 ? <span role='img' aria-label='explosion'>🤯👇</span>”
    </h2>
    <div className="w-full flex flex-col items-center mb-8">
      <img
        src="/lovable-uploads/efb3b311-4fa9-4df6-b124-798a6e78a5e4.png"
        alt="Et si ces grands savants vivaient en 2025 ?"
        className="max-w-lg rounded-lg shadow-lg border-2 border-hikma-accent"
      />
      <p className="mt-3 text-hikma-sand text-center">
        <span className="font-medium text-white">Et si ces grands savants vivaient en 2025 ? Tu vas pas y croire 😱👇</span>
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {scholars.map((s, idx) => (
        <div key={s.id} className={`rounded-lg shadow p-4 ${s.color} flex flex-col gap-2`}>
          <h3 className="text-xl font-bold text-hikma-accent mb-1">{s.name}</h3>
          <div className="mb-3">
            {s.tiktok.map((line, i) => (
              <div key={i} className="flex items-start gap-2 mb-1">
                <span className="text-lg">{line.icon}</span>
                <span className="text-sm text-gray-800">{line.text}</span>
              </div>
            ))}
          </div>
          <div>
            {s.future.map((line, i) => (
              <div key={i} className="flex items-start gap-2 mb-1">
                <span className="text-lg">{line.icon}</span>
                <span className="text-sm text-gray-800">{line.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-10 bg-hikma-secondary/20 border-hikma-accent/40 border rounded-xl p-6 text-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <Clapperboard className="h-8 w-8 text-hikma-accent mb-2" />
        <p className="text-white text-md md:text-lg italic font-semibold">
          “À l’époque, ces mecs là étudiaient sous les étoiles, débattaient dans les souks et écrivaient sur des parchemins.<br />
          Aujourd’hui ? Ils seraient nos idoles YouTube, nos mentors Insta, nos héros Twitch.”
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <Hash className="h-5 w-5 text-hikma-accent" />
          <span className="text-hikma-accent text-md">#Hikma #Génies2025</span>
        </div>
      </div>
    </div>
  </div>
);

export default ModernTikTokTab;
