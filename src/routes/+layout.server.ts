const TOKUBETSU_URL = "https://mei.treelar.xyz/tokubetsu"

const getBirthdayIdol = async (): Promise<Idol | null> => {
    try {
        const res = await fetch(TOKUBETSU_URL)
        const data = await res.json()

        return data as Idol
    } catch{
        return null
    }

}

export const load: (import("./$types").LayoutServerLoad) = () => {
    let idol = getBirthdayIdol()
    return {
        idol
    }
}