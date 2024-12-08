import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getAllVideos: publicProcedure.query(async () => {
        return[
            [
                {
                  "id": 1,
                  "name": "Intro to TRPC",
                  "url": "https://example.com/video1.mp4",
                  "views": 1023,
                  "likes": 120
                },
                {
                  "id": 2,
                  "name": "Understanding React",
                  "url": "https://example.com/video2.mp4",
                  "views": 1345,
                  "likes": 200
                },
                {
                  "id": 3,
                  "name": "JavaScript Fundamentals",
                  "url": "https://example.com/video3.mp4",
                  "views": 987,
                  "likes": 150
                },
                {
                  "id": 4,
                  "name": "Building a REST API with Node.js",
                  "url": "https://example.com/video4.mp4",
                  "views": 1122,
                  "likes": 180
                },
                {
                  "id": 5,
                  "name": "Mastering CSS Grid",
                  "url": "https://example.com/video5.mp4",
                  "views": 1423,
                  "likes": 210
                },
                {
                  "id": 6,
                  "name": "Understanding TypeScript",
                  "url": "https://example.com/video6.mp4",
                  "views": 910,
                  "likes": 130
                },
                {
                  "id": 7,
                  "name": "React Hooks Explained",
                  "url": "https://example.com/video7.mp4",
                  "views": 876,
                  "likes": 110
                },
                {
                  "id": 8,
                  "name": "Next.js for Beginners",
                  "url": "https://example.com/video8.mp4",
                  "views": 560,
                  "likes": 80
                },
                {
                  "id": 9,
                  "name": "Advanced CSS Techniques",
                  "url": "https://example.com/video9.mp4",
                  "views": 1204,
                  "likes": 160
                },
                {
                  "id": 10,
                  "name": "Building Web Apps with Firebase",
                  "url": "https://example.com/video10.mp4",
                  "views": 710,
                  "likes": 95
                },
                {
                  "id": 11,
                  "name": "Understanding GraphQL",
                  "url": "https://example.com/video11.mp4",
                  "views": 830,
                  "likes": 100
                },
                {
                  "id": 12,
                  "name": "Django for Beginners",
                  "url": "https://example.com/video12.mp4",
                  "views": 640,
                  "likes": 70
                },
                {
                  "id": 13,
                  "name": "Introduction to Webpack",
                  "url": "https://example.com/video13.mp4",
                  "views": 1024,
                  "likes": 125
                },
                {
                  "id": 14,
                  "name": "Building APIs with Express.js",
                  "url": "https://example.com/video14.mp4",
                  "views": 1500,
                  "likes": 220
                },
                {
                  "id": 15,
                  "name": "React Native for Mobile Apps",
                  "url": "https://example.com/video15.mp4",
                  "views": 1032,
                  "likes": 130
                },
                {
                  "id": 16,
                  "name": "CSS Flexbox Basics",
                  "url": "https://example.com/video16.mp4",
                  "views": 920,
                  "likes": 140
                },
                {
                  "id": 17,
                  "name": "Building Serverless Apps with AWS",
                  "url": "https://example.com/video17.mp4",
                  "views": 750,
                  "likes": 90
                },
                {
                  "id": 18,
                  "name": "Web Design Fundamentals",
                  "url": "https://example.com/video18.mp4",
                  "views": 1350,
                  "likes": 180
                },
                {
                  "id": 19,
                  "name": "Building Real-Time Apps with Socket.io",
                  "url": "https://example.com/video19.mp4",
                  "views": 1100,
                  "likes": 200
                },
                {
                  "id": 20,
                  "name": "Creating Animations with CSS",
                  "url": "https://example.com/video20.mp4",
                  "views": 880,
                  "likes": 110
                }
              ]
              
        ]
    }),
});

export type AppRouter = typeof appRouter;