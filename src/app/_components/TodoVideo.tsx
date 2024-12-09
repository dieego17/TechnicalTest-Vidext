'use client';

import { useState } from 'react';
import { trpc } from "../_trpc/clients";
import { Video } from "../utils/type"; 
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

/*
  Este componente se encarga de mostrar un video y sus detalles
*/
export default function TodoVideo() {
  const getAllVideos = trpc.getAllVideos.useQuery();
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null); 

  if (getAllVideos.isLoading) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  if (getAllVideos.isError) {
    return <div className="text-center text-red-500">Error al cargar los videos</div>;
  }

  const videos = getAllVideos.data || [];  
  const defaultVideo = videos[0]; 
  const videoToDisplay = currentVideo || defaultVideo;

  return (
    <div className="flex h-screen">
      <VideoPlayer video={videoToDisplay} />
      <div className="w-1/4 bg-gray-100 overflow-y-auto border-l border-gray-300 h-full">
        <VideoList
          videos={videos}
          currentVideo={videoToDisplay}
          onVideoSelect={setCurrentVideo}
        />
      </div>
    </div>
  );
}
