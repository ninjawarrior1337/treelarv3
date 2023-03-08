const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,svelte,html}",
  ],
  theme: {
    extend: {
      colors: {
        muse: "#e4007f",
        aqours: "#009fe8",
        niji: "#fab920",
        treelar: "#3399ff"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
