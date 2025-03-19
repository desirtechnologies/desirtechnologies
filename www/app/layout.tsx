import { routes } from "@/routes";

import { defineLayout, defineMetadata } from "@/definitions";

import "./globals.css"

const Router = routes("static")

const metadata = defineMetadata(Router)

const RootLayout = defineLayout(Router)

export { metadata }

export default RootLayout 