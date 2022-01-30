import {ethers} from "ethers"
import { browser } from "$app/env";
import {writable, derived, readable, get} from "svelte/store"

let ethereum;
if(browser) {
    ethereum = window.ethereum
}

export const isLoggedIn = writable(false)
export const signer = writable<ethers.Signer>(null)

export const selectedAccount = ethereum ? readable<string>(null, set => {
    const onAccountsChanged = (accounts: string[]) => {
        if(accounts.length === 0) {
            return null
        }

        set(accounts[0])
    }

    const updateAccounts = () => {
        ethereum.request({ method: 'eth_accounts' })
        .then(onAccountsChanged)
        .catch((err) => {
            console.error(err);
        });
    }

    const uns = isLoggedIn.subscribe(l => {
        if(!l) {
            set(null)
        } else {
            updateAccounts()
        }
    })

    ethereum.on("accountsChanged", onAccountsChanged)

    return () => {
        ethereum.removeListener("accountsChanged", onAccountsChanged)
        uns()
    }
}) : null

export const shortSelectedAccount = derived(selectedAccount, a => a ? `${a.substring(0, 6)}...${a.substring(a.length-4)}` : "")

export const chainId = ethereum ? readable<string>(null, set => {
    const onChainChanged = (chainId: string) => {
        set(chainId)
    }
    ethereum.on("chainChanged", onChainChanged)
    ethereum.request({ method: 'eth_chainId' })
    .then(onChainChanged)
    .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
    });
    return () => {
        ethereum.removeListener("chainChanged", onChainChanged)
    }
}) : null

export async function loginWithEth() {
    try {
        await ethereum.request({method: "eth_requestAccounts"})
        let provider = new ethers.providers.Web3Provider(ethereum)
        signer.set(provider.getSigner())
        isLoggedIn.set(true)
    } catch(e) {
        console.error(e)
    }
}

export function logout() {
    signer.set(null)
    isLoggedIn.set(false)
}