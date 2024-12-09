import { trpc } from "../_trpc/clients";
import { Video } from "../utils/type";

/*
  Este hook se encarga de incrementar las visualizaciones de un video
*/
export function useVideoView(video: Video) {
  const { mutate: incrementViews } = trpc.incrementViews.useMutation();

  const handlePlay = () => {
    incrementViews({ id: video.id }, {
      onSuccess: (updatedVideo) => {
        if (updatedVideo) {
          video.views = updatedVideo.views; 
        }
      },
    });
  };

  return { handlePlay };
}
