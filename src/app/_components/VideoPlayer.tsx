'use client';
import { Video } from "../utils/type";

export default function VideoPlayer({ video }: { video: Video }) {
  return (
    <div className="flex flex-col justify-between bg-gray-900 text-white p-4 h-full w-3/4">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold mb-2">{video.name}</h1>
        <p className="text-sm text-gray-400">
          Visualizaciones: <span className="font-bold text-blue-400">{video.views}</span>
        </p>
        <p className="text-sm text-gray-400">Likes: {video.likes}</p>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <video
          src={video.url}
          controls
          autoPlay
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
