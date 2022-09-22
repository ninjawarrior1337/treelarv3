import type { RequestHandler } from "./$types";
import {dev} from "$app/environment"
import {json} from "@sveltejs/kit"

class LoveLiveUtils {
    private TODAY = new Date(Date.now())
    private idols = [] as Idol[]
    private IdolDataUrl = "https://gist.githubusercontent.com/ninjawarrior1337/2a51ec53e679550a1d254a465ee79c11/raw"
    public async setup() {
        if (this.idols.length > 0) {
            return
        }
        let r = await fetch(this.IdolDataUrl)
        let j = await r.json()
        this.idols = j.idols
    }
    private getTZDayMonth(tz: string): [string, string] {
        var month = this.TODAY.toLocaleDateString("en-US", {
            timeZone: tz,
            month: "numeric"
        })
        var day = this.TODAY.toLocaleDateString("en-US", {
            timeZone: tz,
            day: "numeric"
        })

        return [month, day]
    }

    private checkBirthday(i: Idol, tz: string): boolean {
        const [iMonth, iDay] = i.birthday.split("/")
        const [tMonth, tDay] = this.getTZDayMonth(tz)
        if(tMonth == iMonth && tDay == iDay) {
            return true
        }
        return false;
    }

    public getBirthdayIdol(): Idol | null {
        //Check JP birthday first
        for(var i of this.idols) {
            if(this.checkBirthday(i, "Asia/Tokyo")) {
                return i
            }
        }
        //Check US birthdays if no JP birthdays exist
        for(var i of this.idols) {
            if(this.checkBirthday(i, "America/Los_Angeles")) {
                return i
            }
        }
        return dev ? this.idols.find((i) => {i.name.includes("Wakana")}) : null
    }
}

export const COMPUTE = async () => {
    const LL = new LoveLiveUtils();
    await LL.setup()
    return LL.getBirthdayIdol()
}

export const GET: RequestHandler = async (req) => {
    let idol = await COMPUTE()
    return json({
        idol
    })
}