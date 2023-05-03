import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"

import type {AppRouter} from "mei"

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: "https://mei.treelar.xyz/api/trpc",
        })
    ]
})