import { routes } from "@/routes";

import { defineLayout, defineMetadata } from "@/definitions";

import "./globals.css"

const Router = routes()

const metadata = defineMetadata(Router.application.metadata)

const RootLayout = defineLayout(Router.application.layout)

export { metadata }

export default RootLayout 