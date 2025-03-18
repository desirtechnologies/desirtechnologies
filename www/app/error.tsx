"use client";

import { routes } from "@/routes"

import { defineView } from "@/definitions"

const Router = routes()

const ErrorPage = defineView(Router.application.loading)

export default ErrorPage



