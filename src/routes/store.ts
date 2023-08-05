import { readable, writable } from "svelte/store";
import { trpc } from "../trpc";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "mei";

type RouterOutput = inferRouterOutputs<AppRouter>;

export const IdolStore = readable<RouterOutput["tokubetsu"]["birthdayToday"]>(null, (set) => {
    const data = trpc.tokubetsu.birthdayToday.query()

    data.then((c) => {
        set(c)
    })
})