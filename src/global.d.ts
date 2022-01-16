/// <reference types="@sveltejs/kit" />

interface Idol {
    name: string,
    color: string,
    birthday: string
}

export declare global {
    interface Window {
        ethereum: any
    }
}