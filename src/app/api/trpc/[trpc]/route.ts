import { fetchRequestHandler } from "@trpc/server/adapters/fetch"; 
import { appRouter } from "@/server";  

/*
    Este archivo es un endpoint de TRPC, el cual es un framework para crear APIs en TypeScript.
    Aquí se configura el manejador de solicitudes que procesa las peticiones GET y POST para el endpoint "/api/trpc".
*/
const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "/api/trpc",  // Define la URL del endpoint para TRPC
        req,  
        router: appRouter, 
        createContext: () => ({}),  // Crea el contexto de la solicitud (aquí vacío, pero se puede extender para manejar autenticación, bases de datos, etc.)
    });

// Exportación del manejador de solicitudes para los métodos GET y POST
export { handler as GET, handler as POST };
