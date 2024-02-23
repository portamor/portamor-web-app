import { Shadows, ThemeOptions, createTheme } from "@mui/material"
import { Inter } from "next/font/google"

declare module "@mui/material/styles" {
  export interface PaletteOptions {
    custom: {
      greyF4: string
      black0B: string
    }
  }
  export interface Palette {
    custom: {
      greyF4: string
      black0B: string
      pinkF3: string
    }
  }
}

export const roboto = Inter({
  weight: ["300", "400", "500", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

export const getTheme = (): ThemeOptions => {
  const colors = {
    primary: { main: "#EB575A" },
    background: {
      default: "#FFF",
    },
    text: {
      primary: "#3A3A3A",
    },
    custom: {
      greyF4: "#F4F5F7",
      black0B: "#0B0D17",
      pinkF3: "#F39F9F",
    },
  }
  return {
    palette: {
      ...colors,
    },
    typography: {
      htmlFontSize: 14,
      fontWeightRegular: 300,
      fontFamily: roboto.style.fontFamily,
    },
    shadows: [
      "none",
      "0px 1px 6px 2px #ecebeb",
      "0px 1px 6px 2px rgba(0, 0, 0, 0.13)",
      ...Array(22).fill("none"),
    ] as Shadows,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "inherit",
            fontWeight: 300,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #E5E9F2",
          },
        },
      },
    },
  }
}

const theme = createTheme(getTheme())

export default theme
