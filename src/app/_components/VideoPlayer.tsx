'use client';
import { useState, useEffect } from "react";
import { Video } from "../utils/type";
import { trpc } from "../_trpc/clients";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function VideoPlayer({ video }: { video: Video }) {
  const [hasLiked, setHasLiked] = useState(video.userLiked);
  const { mutate: incrementLikes } = trpc.incrementLikes.useMutation();
  const { mutate: decrementLikes } = trpc.decrementLikes.useMutation();
  const { mutate: incrementViews } = trpc.incrementViews.useMutation();  

  useEffect(() => {
    setHasLiked(video.userLiked); 
  }, [video.id, video.userLiked]); 

  const handlePlay = () => {
    incrementViews({ id: video.id }, {
      onSuccess: (updatedVideo) => {
        if (updatedVideo) {
          video.views = updatedVideo.views;
        }
      },
    });
  };

  const handleLike = () => {
    if (hasLiked) {
      decrementLikes({ id: video.id }, {
        onSuccess: (updatedVideo) => {
          if (updatedVideo) {
            video.likes = updatedVideo.likes;
            video.userLiked = false; 
            setHasLiked(false);
          }
        },
      });
    } else {
      incrementLikes({ id: video.id }, {
        onSuccess: (updatedVideo) => {
          if (updatedVideo) {
            video.likes = updatedVideo.likes;
            video.userLiked = true; 
            setHasLiked(true); 
          }
        },
      });
    }
  };

  return (
    <div className="flex flex-col justify-between bg-gray-900 text-white p-4 h-full w-3/4">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-2xl font-bold mb-2">{video.name}</h1>
        <p className="text-sm text-gray-400">
          Visualizaciones: <span className="font-bold text-red-500">{video.views}</span>
        </p>
        <p className="text-sm text-gray-400">Likes: <span className="font-bold text-green-500">{video.likes} </span></p>
        <button
          onClick={handleLike}
          className={`mt-2 px-4 py-2 rounded-lg text-white ${hasLiked ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
        >
          {hasLiked ? 'No me gusta ' : 'Me gusta '}
          <FontAwesomeIcon icon={hasLiked ? faCircleXmark : faThumbsUp} />
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <video
          src={video.url}
          controls
          autoPlay
          className="w-full max-w-3xl rounded-lg shadow-lg"
          onPlay={handlePlay}  
        />
      </div>
    </div>
  );
}
