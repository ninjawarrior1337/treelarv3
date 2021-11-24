import { defineConfig } from "windicss/helpers"
export default defineConfig({
    theme: {
        extend: {
            colors: {
                muse: "#e4007f",
                aqours: "#009fe8",
                niji: "#fab920",
                treelar: "#3399ff"
            }
        }
    },
    shortcuts: {
        "text-gradient-treelar": "bg-gradient-to-r from-muse via-treelar to-treelar bg-clip-text text-transparent"
    },
    variants: {},
})