
import { Card, CardContent } from "./ui/card";

interface Sculpture3DProps {
  title: string;
  sketchfabUrl: string;
  creditUrl: string;
  creditName: string;
  modelUrl: string;
}

const Sculpture3D = ({
  title,
  sketchfabUrl,
  creditUrl,
  creditName,
  modelUrl
}: Sculpture3DProps) => (
  <Card className="bg-hikma-primary/60 border-hikma-accent shadow-lg rounded-xl overflow-hidden mb-5">
    <CardContent className="flex flex-col items-center p-4">
      <div className="w-full h-[380px] md:h-[420px]">
        <div className="sketchfab-embed-wrapper h-full w-full">
          <iframe
            title={title}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            data-mozallowfullscreen="true"
            data-webkitallowfullscreen="true"
            data-xr-spatial-tracking="true"
            data-execution-while-out-of-viewport="true"
            data-execution-while-not-rendered="true"
            data-web-share="true"
            src={modelUrl}
            className="rounded-lg w-full h-full"
          ></iframe>
        </div>
      </div>
      <h3 className="text-hikma-accent font-medium text-lg mt-4 mb-1">{title}</h3>
      <span className="text-xs text-hikma-sand mb-1">
        <a
          href={sketchfabUrl}
          target="_blank"
          rel="nofollow"
          className="font-bold hover:text-hikma-accent"
        >
          Voir sur Sketchfab
        </a>{" "}
        • par&nbsp;
        <a
          href={creditUrl}
          target="_blank"
          rel="nofollow"
          className="font-bold hover:text-hikma-accent"
        >
          {creditName}
        </a>
      </span>
    </CardContent>
  </Card>
);

export default Sculpture3D;
