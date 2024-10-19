/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-colour": "#004d35",
        "secondary-colour": "#fbc800",
        gainsboro: "#d9d9d9",
        background: "rgba(240, 255, 231, 0.75)",
        lite: "#646464",
        teal: {
          "100": "#338069",
          "200": "#26735c",
        },
        backgroundColor: {
          'custom-green': '#e6ffd6',
          'image':'#FEF1BF'
        },
        goldenrod: "#c79400",
        "taxt-colour": "#252525",
        mediumspringgreen: {
          "100": "#50fb95",
          "200": "#1fc761",
        },
        sienna: "#ad6136",
        peru: "#c77a4f",
        royalblue: "#5a79e7",
        "star-listed-lite-color": "#b9b9b9",
        silver: "#bcbcbc",
        green: "#378805",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
      },
      borderColor:{
        inputColor:'#989898',
      },
      borderRadius: {
        "8xs": "5px",
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "14xl": "33px",
      "7xl": "26px",
      xs: "12px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      mid: "17px",
      "2xs": "11px",
      "6xl": "25px",
      "11xl": "30px",
      mini: "15px",
      smi: "13px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      xsm:'340px',
      sp:'450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // Custom breakpoints
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
