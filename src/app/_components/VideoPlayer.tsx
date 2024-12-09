'use client';
import { Video } from "../utils/type";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useVideoLike } from "../hooks/useVideoLike";
import { useVideoView } from "../hooks/useVideoView";

/*
    Este componente se encarga de mostrar un video y sus detalles
*/
export default function VideoPlayer({ video }: { video: Video }) {
  const { hasLiked, handleLike } = useVideoLike(video);
  const { handlePlay } = useVideoView(video);

  return (
    <div className="flex flex-col justify-between bg-gray-900 text-white p-6 w-full lg:w-3/4 h-full">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-3xl font-semibold mb-2">{video.name}</h1>
        <p className="text-sm text-gray-400">
          Visualizaciones: <span className="font-bold text-red-500">{video.views}</span>
        </p>
        <p className="text-sm text-gray-400">Likes: <span className="font-bold text-green-500">{video.likes}</span></p>
        <button
          onClick={handleLike}
          className={`mt-2 px-6 py-3 rounded-lg text-white transition-all duration-300 ${hasLiked ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
        >
          {hasLiked ? 'No me gusta ' : 'Me gusta '}
          <FontAwesomeIcon icon={hasLiked ? faThumbsDown : faThumbsUp} />
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <video
          src={video.url}
          controls
          autoPlay
          className="w-full max-w-4xl rounded-lg shadow-xl"
          onPlay={handlePlay}  
        />
      </div>
    </div>
  );
}
