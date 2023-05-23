import { readable, writable } from "svelte/store";
import { trpc } from "../trpc";
import type { Character } from "mei";

export const IdolStore = readable<Character|null>(null, (set) => {
    const data = trpc.tokubetsu.birthdayToday.query() as Promise<Character|null> 

    data.then((c) => {
        set(c)
    })
})