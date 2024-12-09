import { Video } from '../utils/type';
import Image from 'next/image';

interface VideoListProps {
  videos: Video[];
  currentVideo: Video;
  onVideoSelect: (video: Video) => void;
}

/*
  Este componente se encarga de mostrar una lista de videos sugeridos
*/
export default function VideoList({ videos, currentVideo, onVideoSelect }: VideoListProps) {
  return (
    <div className="bg-gray-800 text-white overflow-y-auto border-l border-gray-700 p-6 h-full custom-scrollbar">
      <h2 className="text-2xl font-bold text-center mb-6 border-b border-gray-600 pb-3">
        Videos sugeridos
      </h2>
      <ul className="space-y-6">
        {videos.map(video => (
          <li
            key={video.id}
            className={`flex items-center p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition-all duration-200 ${
              video.id === currentVideo.id ? 'bg-gray-600' : ''
            }`}
            onClick={() => onVideoSelect(video)}
          >
            <Image
              src='/play.png'
              alt={video.name}
              className="w-16 h-16 rounded-md mr-6"
              width={64}
              height={64}
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{video.name}</h3>
              <p className="text-sm text-gray-400">
                Visualizaciones: {video.views}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
