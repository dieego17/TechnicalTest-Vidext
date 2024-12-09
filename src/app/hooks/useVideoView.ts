import { trpc } from "../_trpc/clients";  
import { Video } from "../utils/type";  

/*
  Este hook se encarga de incrementar las visualizaciones de un video.
*/
export function useVideoView(video: Video) {
  const { mutate: incrementViews } = trpc.incrementViews.useMutation();  // Uso de la mutación de TRPC para incrementar las visualizaciones del video

  // Función que se ejecuta cuando el video empieza a reproducirse
  const handlePlay = () => {
    incrementViews({ id: video.id }, {  // Llamada a la mutación para incrementar las visualizaciones
      onSuccess: (updatedVideo) => {
        if (updatedVideo) {
          video.views = updatedVideo.views;  // Actualiza las visualizaciones del video con la nueva cantidad
        }
      },
    });
  };

  return { handlePlay };  // Retorna la función que maneja la reproducción del video y el incremento de visualizaciones
}
