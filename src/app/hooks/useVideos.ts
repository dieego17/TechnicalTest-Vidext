import { trpc } from "../_trpc/clients";  

/*
  Este hook se encarga de consultar los videos desde la API utilizando TRPC.
  Retorna los videos, el estado de carga y si ocurrió un error.
*/
export function useVideos() {
  const { data, isLoading, isError } = trpc.getAllVideos.useQuery();

  return {
    videos: data || [],  
    isLoading,           
    isError,            
  };
}
