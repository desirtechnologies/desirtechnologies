"use client";

import { routes } from "@/routes"

import { defineView } from "@/definitions"

const Router = routes("static")

const IndexLoader = defineView(Router)

export default IndexLoader



