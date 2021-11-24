import {ethers} from "ethers"
import Web3Modal from "web3modal"
import {writable, derived, readable, get} from "svelte/store"

export const isLoggedIn = writable(false)
export const signer = writable<ethers.Signer>(null)

export const selectedAccount = readable<string>(null, set => {
    let interval;

    const unsubscribe = signer.subscribe(s => {
        interval ? clearInterval(interval) : null
        interval = setInterval(() => {
            if(s) {
                s.getAddress().then((a) => set(a))
            } else {
                set("")
            }
        }, 1000)
    })

    return () => {unsubscribe(); clearInterval(interval)}
})

export const shortSelectedAccount = derived(selectedAccount, a => a ? `${a.substr(0, 6)}...${a.substr(-4)}` : "")

export async function loginWithEth() {
    const web3Modal = new Web3Modal({
        providerOptions: {
            
        },
        cacheProvider: true,
        network: "rinkeby"
    })
    let ethereum = await web3Modal.connect()
    let provider = new ethers.providers.Web3Provider(ethereum, "rinkeby")
    signer.set(provider.getSigner())
    isLoggedIn.set(true)
}

export function logout() {
    signer.set(null)
    isLoggedIn.set(false)
}