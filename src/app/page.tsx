// pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoList from "../components/VideoList/VideoList";
import useVideos from "../hook/useVideos";
import { Video } from "./types/types";

export default function Home() {
  const { videos, loading, error } = useVideos(); // Usamos el custom hook
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    // Si hay videos, seleccionamos el primero por defecto
    if (videos.length > 0) {
      setSelectedVideo(videos[0]);
    }
  }, [videos]); // Este useEffect se ejecutará cuando los videos cambien

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 text-center text-2xl font-bold">Music Video Player</header>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Video Principal */}
        <div className="col-span-2 flex justify-center items-center">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : selectedVideo ? (
            <VideoPlayer
              videoId={selectedVideo.id.videoId}
              title={selectedVideo.snippet.title}
            />
          ) : (
            <p className="text-center">No video selected</p>
          )}
        </div>

        {/* Selector de Videos con Scroll */}
        <div className="col-span-1">
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
}
