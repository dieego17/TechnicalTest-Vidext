'use client';

import { trpc } from "../_trpc/clients";

export default function TodoVideo() {
    const getAllVideos = trpc.getAllVideos.useQuery();
    console.log(getAllVideos.data);

    return (
        <div>
            {JSON.stringify(getAllVideos.data)}
        </div>
    );
}