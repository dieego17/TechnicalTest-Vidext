import { useState, useEffect } from "react";
import { trpc } from "../_trpc/clients";
import { Video } from "../utils/type";

/* 
    Este hook se encarga de incrementar o decrementar los likes de un video
*/
export function useVideoLike(video: Video) {
  const [hasLiked, setHasLiked] = useState(video.userLiked);
  const { mutate: incrementLikes } = trpc.incrementLikes.useMutation();
  const { mutate: decrementLikes } = trpc.decrementLikes.useMutation();

  useEffect(() => {
    setHasLiked(video.userLiked); 
  }, [video.id, video.userLiked]);

  const handleLike = () => {
    if (hasLiked) {
      decrementLikes({ id: video.id }, {
        onSuccess: (updatedVideo) => {
          if (updatedVideo) {
            video.likes = updatedVideo.likes; 
            video.userLiked = false;
            setHasLiked(false); 
          }
        },
      });
    } else {
      incrementLikes({ id: video.id }, {
        onSuccess: (updatedVideo) => {
          if (updatedVideo) {
            video.likes = updatedVideo.likes;
            video.userLiked = true;
            setHasLiked(true);
          }
        },
      });
    }
  };

  return { hasLiked, handleLike };
}
