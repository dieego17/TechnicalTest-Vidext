import { useState, useEffect } from "react";

// Definimos el tipo de los videos
interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: { medium: { url: string } };
  };
}

const useVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = `https://www.googleapis.com/youtube/v3/search`;
  const NEXT_PUBLIC_YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Buscamos con parámetros ajustados para obtener videos más conocidos
        const res = await fetch(
          `${API_URL}?part=snippet&q=top%20music&type=video&videoCategoryId=10&maxResults=10&order=viewCount&key=${NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items);
      } catch {
        setError("Error fetching videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
};

export default useVideos;
