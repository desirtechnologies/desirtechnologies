import { routes } from "@/routes";

import { defineLayout, defineMetadata } from "@/definitions";

import "./globals.css"

const Router = routes("static")

const metadata = defineMetadata(Router)

const SiteLayout = defineLayout(Router)

export { metadata }

export default SiteLayout 