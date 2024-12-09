import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/server";

/*
    Este archivo es un cliente de trpc, el cual es un framework para crear APIs en TypeScript.
*/
export const trpc = createTRPCReact<AppRouter>({}); 