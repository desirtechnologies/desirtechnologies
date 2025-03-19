"use client";

import { routes } from "@/routes"

import { defineErrorPageRouter } from "@/definitions"

const Router = routes("static")

const ErrorPage = defineErrorPageRouter(Router)

export default ErrorPage



