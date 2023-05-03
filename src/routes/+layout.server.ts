import {trpc} from "../trpc"
import type { Character } from "mei"

const getBirthdayIdol = () => {
    return trpc.tokubetsu.birthdayToday.query() as Promise<Character>
}

export const load: (import("./$types").LayoutServerLoad) = async () => {
    let idol = getBirthdayIdol()
    return {
        idol,
        hello: trpc.hello.query()
    }
}