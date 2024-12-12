declare var require: any;
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }){
      // ...
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gotu: ["Gotu"],
        Italiana: ["Italiana"],
        Roboto: ["Roboto Flex"],
        RobotoSerif: ["Roboto Serif"],
        GaramondRegular: ["Cormorant Garamond"],
        TenorSans: ["Tenor Sans"],
        NanumMyeongjo: ["Nanum Myeongjo"],
        Literata: ["Literata"],
        Poppins: ["Poppins"],

        // "sans": ["Gotu", "Roboto Flex", "TenorSans" ],
        // "serif": ["RobotoSerif", "GaramondRegular", "Italiana" ]
        // Roboto: ['"Roboto Flex"', "sans-serif"],
        // Gotu: ["Gotu", "sans-serif" ],
        // TenorSans: ["Tenor Sans", "sans-serif" ],
        // RobotoSerif: ['"Roboto Serif"', "serif"],
        // GaramondRegular: ["Cormorant Garamond", "serif"],
        // Italiana: ["Italiana", "serif"],
      },
      spacing: {
        typo1: ".236076rem",
        typo2: ".382rem",
        typo3: ".618rem",
        typo4: "1rem",
        typo5: "1.618rem",
        typo6: "2.618rem",
        typo7: "4.236rem",
        typo8: "6.854rem",
      },
      fontSize: {
        typo1: ".236076rem",
        typo2: ".382rem",
        typo3: ".618rem",
        typo4: "1rem",
        typo5: "1.618rem",
        typo6: "2.618rem",
        typo7: "4.236rem",
        typo8: "6.854rem",
      },
      colors: {
        color1: "rgba(var(--COLOR1))",
        FG1: "rgba(var(--FG1))",
        BG1: "rgba(var(--BG1))",
        BG2: "rgba(var(--BG2))",
        BG3: "rgba(var(--BG3))",
        BG4: "rgba(var(--BG4))",

        highlightColor: {
          55: "#fc471a",
        },
        lightColor: {
          55: "#e5e5e5",
        },
        darkColor: {
          47: "#2f2f2f",
        },
        midDarkColor: {
          55: "#373737",
        },
        lightestDarkColor: {
          70: "#464646",
        },
        lighterDarkColor: {
          63: "#3f3f3f",
        },
      },
      keyframes: {
        whiteFlash: {
          "0%": { filter: "brightness(115%)", transform: 'scale(1.03)' },
          "100%": { filter: "brightness(100%)", transform: 'scale(1)'  },
        },
        buttonClick: {
          "0%": { color: "#FFFFFF", transform: 'scale(1.4)' },
          "100%": { color: "rgba(var(--FG1))", transform: 'scale(1)'  },
        },
      },
      animation: {
        "white-flash": "whiteFlash 0.25s linear 1",
        "button-click": "buttonClick 0.25s linear 1",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    //require("tailwind-scrollbar-variants"),
    plugin(function ({ addUtilities, addComponents }) {
      addComponents({
        ".scrollbar-hide-arrows": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
        "spelling-error-recolor": {},
      }),
        addUtilities({
          ".font-shadow-bold": {
            //"font-variation-settings": "'GRAD' 1000",
            "text-shadow": "-0.03ex 0 0 currentColor, 0.03ex 0 0 currentColor",
          },
        });
      addUtilities({
        ".font-grade-800": {
          "font-weight": "800",
          "font-variation-settings": '"wght" 800',
        },
      });
    }),
  ],
} satisfies Config;
