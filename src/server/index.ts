import { publicProcedure, router } from "./trpc";
import Videos from './data/videos.json'
import { z } from 'zod';

export const appRouter = router({
    getAllVideos: publicProcedure.query(async () => {
        return Videos
    }),

    incrementLikes: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
      const { id } = input;

      const video = Videos.find((video) => video.id === id);
      if (video) {
        video.likes += 1;
      }
      
      return video; 
    }),

    decrementLikes: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
      const { id } = input;

      const video = Videos.find((video) => video.id === id);
      if (video) {
        video.likes -= 1;
      }
      
      return video; 
    }),

    incrementViews: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
      const { id } = input;

      const video = Videos.find((video) => video.id === id);
      if (video) {
        video.views += 1;
      }
      
      return video; 
    }),
});

export type AppRouter = typeof appRouter;