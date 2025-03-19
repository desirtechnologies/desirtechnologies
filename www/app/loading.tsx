"use client";

import { routes } from "@/routes"

import { defineLoaderPage } from "@/definitions"

const Router = routes("static")

const IndexLoader = defineLoaderPage(Router)

export default IndexLoader



