interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg w-[80%] h-[300px] lg:h-[600px]">
      {/* Reproductor de video */}
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          className="rounded-lg"
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </div>
  );
};

export default VideoPlayer;
