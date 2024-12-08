import { Video } from '../utils/type';
import Image from 'next/image';

interface VideoListProps {
  videos: Video[];
  currentVideo: Video;
  onVideoSelect: (video: Video) => void;
}

export default function VideoList({ videos, currentVideo, onVideoSelect }: VideoListProps) {
  return (
    <div className="bg-gray-100 overflow-y-auto border-l border-gray-300 p-4 h-full">
      <h2 className="text-xl font-bold text-center mb-4 border-b border-gray-300 pb-2">
        Videos sugeridos
      </h2>
      <ul className="space-y-4">
        {videos.map(video => (
          <li
            key={video.id}
            className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all ${
              video.id === currentVideo.id ? 'bg-gray-300' : ''
            }`}
            onClick={() => onVideoSelect(video)}
          >
            <Image
              src={video.url}
              alt={video.name}
              className="w-16 h-16 rounded-md mr-4"
              width={64}
              height={64}
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{video.name}</h3>
              <p className="text-sm text-gray-600">
                Visualizaciones: {video.views}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
