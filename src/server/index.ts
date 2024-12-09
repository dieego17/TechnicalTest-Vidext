import { publicProcedure, router } from "./trpc";
import Videos from './data/videos.json';  
import { z } from 'zod'; 

/*
    Estas funciones son las que se exportan para ser utilizadas en el cliente.
    Son responsables de realizar las peticiones a la API y manejar la lógica.
*/
export const appRouter = router({
  
    // Procedimiento para obtener todos los videos.
    getAllVideos: publicProcedure.query(async () => {
        return Videos;  // Devuelve todos los videos del archivo JSON.
    }),

    // Procedimiento para incrementar el número de "likes" de un video específico.
    incrementLikes: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
        const { id } = input;  // Extrae el ID del video a partir de la entrada.

        // Busca el video por su ID en el arreglo de videos.
        const video = Videos.find((video) => video.id === id);
        if (video) {
            video.likes += 1;  // Incrementa el número de "likes" del video.
        }
        
        return video;  // Devuelve el video con el número actualizado de "likes".
    }),

    // Procedimiento para decrementar el número de "likes" de un video específico.
    decrementLikes: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
        const { id } = input;  // Extrae el ID del video a partir de la entrada.

        // Busca el video por su ID en el arreglo de videos.
        const video = Videos.find((video) => video.id === id);
        if (video) {
            video.likes -= 1;  // Decrementa el número de "likes" del video.
        }

        return video;  // Devuelve el video con el número actualizado de "likes".
    }),

    // Procedimiento para incrementar el número de "views" (visualizaciones) de un video.
    incrementViews: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
        const { id } = input;  // Extrae el ID del video a partir de la entrada.

        // Busca el video por su ID en el arreglo de videos.
        const video = Videos.find((video) => video.id === id);
        if (video) {
            video.views += 1;  // Incrementa el número de visualizaciones del video.
        }

        return video;  // Devuelve el video con el número actualizado de "views".
    }),
});

// El tipo AppRouter es utilizado para tipar correctamente las rutas de la API en el cliente.
export type AppRouter = typeof appRouter;
