import { createTRPCReact } from "@trpc/react-query"; 
import { type AppRouter } from "@/server";  

/*
    Este archivo es un cliente de TRPC, el cual es un framework para crear APIs en TypeScript.
    Este cliente permite interactuar con las rutas definidas en el servidor a través de llamadas a la API.
*/
export const trpc = createTRPCReact<AppRouter>({});  // Se crea el cliente TRPC con las rutas definidas en AppRouter
