import { COMPUTE } from "./idol/+server"

export const load: (import("./$types").LayoutServerLoad) = () => {
    let idol = COMPUTE()
    return {
        idol
    }
}