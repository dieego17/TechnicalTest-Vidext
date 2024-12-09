/*
  Este archivo define el tipo de datos de un video.
  El tipo Video es utilizado en toda la aplicación para manejar la información relacionada con los videos.
*/
export type Video = {
  id: number;           
  name: string;         
  url: string;          
  views: number;        
  likes: number;        
  userLiked: boolean;  
};
