'use client';

import { useState } from 'react';
import { trpc } from "../_trpc/clients";  
import { Video } from "../utils/type";   
import VideoPlayer from "./VideoPlayer";  
import VideoList from "./VideoList"; 

/*
  Este componente muestra un video seleccionado y una lista de videos.
*/
export default function TodoVideo() {
  // Consulta los videos desde la API
  const getAllVideos = trpc.getAllVideos.useQuery();
  
  // Estado para manejar el video actualmente seleccionado
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null); 

  // Si los datos están cargando, muestra un mensaje
  if (getAllVideos.isLoading) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  // Si ocurre un error, muestra un mensaje de error
  if (getAllVideos.isError) {
    return <div className="text-center text-red-500">Error al cargar los videos</div>;
  }

  const videos = getAllVideos.data || [];  // Obtiene los videos o usa un array vacío
  const defaultVideo = videos[0];  // Primer video como predeterminado
  const videoToDisplay = currentVideo || defaultVideo;  // Muestra el video seleccionado o el predeterminado

  return (
    <div className="flex h-screen">
      <VideoPlayer video={videoToDisplay} />  {/* Reproduce el video seleccionado */}
      
      <div className="w-1/4 bg-gray-100 overflow-y-auto border-l border-gray-300 h-full">
        <VideoList
          videos={videos}  // Pasa los videos a la lista
          currentVideo={videoToDisplay}  // Resalta el video actualmente seleccionado
          onVideoSelect={setCurrentVideo}  // Permite seleccionar un nuevo video
        />
      </div>
    </div>
  );
}
