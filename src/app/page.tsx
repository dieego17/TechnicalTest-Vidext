"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../components/ui/button';

// Definimos el tipo de los videos/artistas
interface Video {
  idAlbum: string;
  strAlbum: string;
  strAlbumThumb: string;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]); // Especificamos el tipo del estado

  const API_URL = `https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024`;

  useEffect(() => {
    // Llamada a la API de TheAudioDB
    const fetchVideos = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.album) {
        setVideos(data.album);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 text-center text-2xl font-bold">Video Player</header>
      <main className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.idAlbum}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
          >
            <Image
              src={video.strAlbumThumb} // Usamos la miniatura del álbum
              alt={video.strAlbum}
              width={640}
              height={360}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{video.strAlbum}</h2>
              <Button className="mt-2 w-full bg-red-600 text-white py-2 rounded">
                Watch Now
              </Button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
