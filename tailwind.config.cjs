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
        treelar: "#3399ff",
        seijin: {
          "blue": "#2DC6F2",
          "red": "#F85B54",
          "green": "#44D88D",
          "text": "#2C2C2C"
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        seijin: ["Corporate Logo ver3", "コーポレート・ロゴ ver3"]
      },
    }
  }
}
