'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { httpBatchLink } from "@trpc/client"; 
import React, { useState } from "react"; 
import { trpc } from "./clients";  

/*
    Este Provider es un componente que envuelve a la aplicación y provee de un cliente de TRPC y un cliente de React Query.
    Se utiliza para configurar y proporcionar los clientes necesarios para hacer solicitudes a la API de TRPC
    y gestionar el estado de las solicitudes con React Query.
*/
export default function Provider({ children }: { children: React.ReactNode }) {
    // Inicializa el cliente de React Query para gestionar las solicitudes de datos
    const [queryClient] = useState(() => new QueryClient());

    // Inicializa el cliente TRPC para hacer solicitudes a la API de TRPC
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                // Configuración de la URL del servidor TRPC
                httpBatchLink({
                    url: "http://localhost:3000/api/trpc",  // URL del servidor de la API TRPC
                }),
            ],
        })
    );

    return (
        // Proporciona el cliente TRPC y el cliente de React Query a la aplicación
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children} 
            </QueryClientProvider>
        </trpc.Provider>
    );
}
