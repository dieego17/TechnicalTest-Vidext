import Image from "next/image";

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
}

interface VideoListProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, onVideoSelect }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg h-full overflow-y-auto max-h-[calc(100vh-100px)]">
      <h3 className="text-lg font-semibold mb-4">Music Videos</h3>
      <div className="space-y-4">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="flex items-center gap-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => onVideoSelect(video)}
          >
            <Image
              src={video.snippet.thumbnails.medium.url || "/placeholder.jpg"}
              alt={video.snippet.title}
              width={100}
              height={100}
              className="w-20 h-20 rounded object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold">{video.snippet.title}</h4>
              <p className="text-xs text-gray-400">{video.snippet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
