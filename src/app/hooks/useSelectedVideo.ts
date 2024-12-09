import { useState } from 'react';
import { Video } from "../utils/type";   

/*
  Este hook maneja la selección de un video.
  Almacena el video seleccionado en el estado local y proporciona una función
  para cambiar el video seleccionado.
*/
export function useSelectedVideo() {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

  const selectVideo = (video: Video) => {
    setCurrentVideo(video);
  };

  return {
    currentVideo,
    selectVideo,
  };
}
