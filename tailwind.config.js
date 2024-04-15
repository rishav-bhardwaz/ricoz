/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#888",
          "200": "#657b65",
          "300": "rgba(15, 33, 51, 0.1)",
        },
        darkslategray: {
          "100": "#44454f",
          "200": "#333",
          "300": "#1b3228",
        },
        dimgray: {
          "100": "#756c6a",
          "200": "#6b6e73",
          "300": "#4f665c",
          "400": "#4d4e54",
        },
        darkgray: "#aaa",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dbdbdb",
          "300": "rgba(230, 230, 230, 0.09)",
        },
        ghostwhite: {
          "100": "#f9faff",
          "200": "#f5f9ff",
        },
        lavender: {
          "100": "#ebecfb",
          "200": "#dfdeff",
          "300": "#dddcff",
        },
        lightsteelblue: "#c3c3ef",
        springgreen: "#5cff85",
        royalblue: "#007aff",
        cornflowerblue: "#26a1ff",
        limegreen: "#29cc52",
        darkgreen: "rgba(2, 67, 0, 0.53)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        "playfair-display": "'Playfair Display'",
        lato: "Lato",
        inter: "Inter",
      },
      borderRadius: {
        "5xs-5": "7.5px",
        "31xl": "50px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      mini: "15px",
      xl: "20px",
      smi: "13px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "38xl": "57px",
      "27xl": "46px",
      "15xl": "34px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
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
