import { useState, useEffect } from "react";  
import { trpc } from "../_trpc/clients"; 
import { Video } from "../utils/type";  

/* 
  Este hook se encarga de incrementar o decrementar los likes de un video.
*/
export function useVideoLike(video: Video) {
  // Estado que indica si el usuario ha dado "like" al video
  const [hasLiked, setHasLiked] = useState(video.userLiked);

  // Mutaciones para incrementar y decrementar los likes
  const { mutate: incrementLikes } = trpc.incrementLikes.useMutation();
  const { mutate: decrementLikes } = trpc.decrementLikes.useMutation();

  // Sincronización del estado `hasLiked` con los cambios en el video
  useEffect(() => {
    setHasLiked(video.userLiked);  
  }, [video.id, video.userLiked]);

  // Función para manejar la acción de dar "like" o "dislike" al video
  const handleLike = () => {
    if (hasLiked) {
      // Si ya le dio "like", se decrementa el contador de likes
      decrementLikes({ id: video.id }, {
        onSuccess: (updatedVideo) => {
          if (updatedVideo) {
            video.likes = updatedVideo.likes;  // Actualiza el número de likes
            video.userLiked = false;  // Marca que el usuario ya no ha dado "like"
            setHasLiked(false);  // Actualiza el estado
          }
        },
      });
    } else {
      // Si no le dio "like", se incrementa el contador de likes
      incrementLikes({ id: video.id }, {
        onSuccess: (updatedVideo) => {
          if (updatedVideo) {
            video.likes = updatedVideo.likes;  // Actualiza el número de likes
            video.userLiked = true;  // Marca que el usuario ha dado "like"
            setHasLiked(true);  // Actualiza el estado
          }
        },
      });
    }
  };

  return { hasLiked, handleLike };  // Retorna el estado y la función para cambiar el "like"
}
