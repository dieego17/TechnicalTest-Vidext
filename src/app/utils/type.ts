/*
  Este archivo define el tipo de datos de un video
*/
export type Video = {
    id: number;
    name: string;
    url: string;
    views: number;
    likes: number;
    userLiked: boolean;
  };
  