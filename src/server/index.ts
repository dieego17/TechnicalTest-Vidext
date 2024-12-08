import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getAllVideos: publicProcedure.query(async () => {
        return[
            [
              {
                "id": 1,
                "name": "Explorando la India",
                "url": "https://videos.pexels.com/video-files/6583592/6583592-uhd_2560_1440_25fps.mp4",
                "views": 1023,
                "likes": 120
            },
            {
                "id": 2,
                "name": "Descubriendo Valencia, España",
                "url": "https://videos.pexels.com/video-files/3851611/3851611-hd_1920_1080_30fps.mp4",
                "views": 1345,
                "likes": 200
            },
            {
                "id": 3,
                "name": "Maravillas de la Pirámide de Egipto",
                "url": "https://videos.pexels.com/video-files/4205790/4205790-uhd_1920_1440_30fps.mp4",
                "views": 987,
                "likes": 150
            },
            {
                "id": 4,
                "name": "Aventura en Barcelona, España",
                "url": "https://videos.pexels.com/video-files/10801860/10801860-hd_1920_1080_30fps.mp4",
                "views": 1122,
                "likes": 180
            },
            {
                "id": 5,
                "name": "El Lago más Hermoso del Mundo",
                "url": "https://videos.pexels.com/video-files/9113080/9113080-uhd_2560_1440_30fps.mp4",
                "views": 1423,
                "likes": 210
            },
            {
                "id": 6,
                "name": "Roma: Historia y Cultura",
                "url": "https://videos.pexels.com/video-files/4840514/4840514-uhd_2560_1440_25fps.mp4",
                "views": 910,
                "likes": 130
            },
            {
                "id": 7,
                "name": "El Ritmo de Nueva York",
                "url": "https://videos.pexels.com/video-files/3202634/3202634-hd_1920_1080_30fps.mp4",
                "views": 876,
                "likes": 110
            },
            {
                "id": 8,
                "name": "El Poder de Programar",
                "url": "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4",
                "views": 560,
                "likes": 80
            },
            {
                "id": 9,
                "name": "La IA: El Futuro es Ahora",
                "url": "https://videos.pexels.com/video-files/8327799/8327799-uhd_2560_1440_25fps.mp4",
                "views": 1204,
                "likes": 160
            },
            {
                "id": 10,
                "name": "Baloncesto: Pasión y Vida",
                "url": "https://videos.pexels.com/video-files/5192157/5192157-hd_1920_1080_30fps.mp4",
                "views": 710,
                "likes": 95
            },
            {
                "id": 11,
                "name": "Fútbol: La Vida en el Campo",
                "url": "https://videos.pexels.com/video-files/6077718/6077718-uhd_2560_1440_25fps.mp4",
                "views": 830,
                "likes": 100
            },
            {
                "id": 12,
                "name": "La Emoción de la Champions League",
                "url": "https://videos.pexels.com/video-files/3722209/3722209-hd_1920_1080_25fps.mp4",
                "views": 640,
                "likes": 70
            },
            {
                "id": 13,
                "name": "Padel: Diversión y Estrategia",
                "url": "https://videos.pexels.com/video-files/992695/992695-hd_1920_1080_25fps.mp4",
                "views": 1024,
                "likes": 125
            },
            {
                "id": 14,
                "name": "Correr: Libertad en Movimiento",
                "url": "https://videos.pexels.com/video-files/3125907/3125907-uhd_2560_1440_25fps.mp4",
                "views": 1500,
                "likes": 220
            },
            {
                "id": 15,
                "name": "Haas en Pit Lane: Velocidad Extrema",
                "url": "https://videos.pexels.com/video-files/16605636/16605636-uhd_2560_1440_60fps.mp4",
                "views": 1032,
                "likes": 130
            },
            {
                "id": 16,
                "name": "Alpha Tauri: El Arte del Pit Stop",
                "url": "https://videos.pexels.com/video-files/16605635/16605635-uhd_2560_1440_60fps.mp4",
                "views": 920,
                "likes": 140
            },
            {
                "id": 17,
                "name": "El Mayor Paso de Cebra del Mundo",
                "url": "https://videos.pexels.com/video-files/10329842/10329842-hd_1920_1080_30fps.mp4",
                "views": 750,
                "likes": 90
            },
            {
                "id": 18,
                "name": "La Belleza de la Ciudad en 4K",
                "url": "https://videos.pexels.com/video-files/13834577/13834577-uhd_2730_1440_24fps.mp4",
                "views": 1350,
                "likes": 180
            },
            {
                "id": 19,
                "name": "Santiago Bernabéu: Un Ícono del Fútbol",
                "url": "https://videos.pexels.com/video-files/3786495/3786495-uhd_2560_1440_25fps.mp4",
                "views": 1100,
                "likes": 200
            },
            {
                "id": 20,
                "name": "El Retiro: El Corazón de Madrid",
                "url": "https://videos.pexels.com/video-files/4243897/4243897-hd_1920_1080_30fps.mp4",
                "views": 880,
                "likes": 110
            }
              ]
              
        ]
    }),
});

export type AppRouter = typeof appRouter;