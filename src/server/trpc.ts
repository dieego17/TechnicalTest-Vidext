import { initTRPC } from "@trpc/server";

/*
    Este archivo es el punto de entrada de TRPC. Aquí se crean las instancias de TRPC y se exportan los procedimientos y el router.
*/
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;