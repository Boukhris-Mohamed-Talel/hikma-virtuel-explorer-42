
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Video, Play } from "lucide-react";
import { useState } from "react";

interface VideoPreviewProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const VideoPreview = ({ title, thumbnail, videoUrl }: VideoPreviewProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="relative">
      <div 
        className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setShowDialog(true)}
      >
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-hikma-primary/50 flex items-center justify-center">
          <Play className="w-16 h-16 text-hikma-accent opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-hikma-primary border-hikma-accent max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-hikma-accent flex items-center gap-2">
              <Video className="h-5 w-5" />
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video mt-4">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoPreview;
