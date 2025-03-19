"use client";

import { routes } from "@/routes"

import { defineView } from "@/definitions"

const Router = routes("static")

const ErrorPage = defineView(Router)

export default ErrorPage



