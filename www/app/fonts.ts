import { Inter } from "next/font/google"
import { VT323 } from "next/font/google"
import type { NextFontWithVariable } from "next/dist/compiled/@next/font"
import type { NextFont } from "next/font"

const ppEditorialNewUltralightItalic: NextFontWithVariable & NextFont = {
  className: "font-pp-editorial",
  style: {
    fontFamily: "PPEditorialNew-UltralightItalic",
    fontWeight: "200",
    fontStyle: "italic",
  },
  variable: "--font-pp-editorial",
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vt323",
})

export { ppEditorialNewUltralightItalic, inter, vt323 }

