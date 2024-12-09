'use client';

import  VideoPlayer  from "./VideoPlayer";
import  VideoList  from "./VideoList";
import { useVideos } from "../hooks/useVideos";
import { useSelectedVideo } from "../hooks/useSelectedVideo";  

/*
  Este componente muestra un video seleccionado y una lista de videos.
*/
export default function TodoVideo() {
  // Obtención de videos desde la API
  const { videos, isLoading, isError } = useVideos();

  // Lógica para manejar la selección de video
  const { currentVideo, selectVideo } = useSelectedVideo();
  
  // Si los datos están cargando, muestra un mensaje
  if (isLoading) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  // Si ocurre un error, muestra un mensaje de error
  if (isError) {
    return <div className="text-center text-red-500">Error al cargar los videos</div>;
  }

  const defaultVideo = videos[0];  // Primer video como predeterminado
  const videoToDisplay = currentVideo || defaultVideo;  // Muestra el video seleccionado o el predeterminado

  return (
    <div className="flex h-screen">
      <VideoPlayer video={videoToDisplay} />  {/* Reproduce el video seleccionado */}
      
      <div className="w-1/4 bg-gray-100 overflow-y-auto border-l border-gray-300 h-full">
        <VideoList
          videos={videos}  // Pasa los videos a la lista
          currentVideo={videoToDisplay}  // Resalta el video actualmente seleccionado
          onVideoSelect={selectVideo}  // Permite seleccionar un nuevo video
        />
      </div>
    </div>
  );
}
