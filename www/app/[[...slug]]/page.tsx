import { routes } from "@/routes";

import { definePageRouter, definePageParameters } from "@/definitions"

const Router = routes("static") 

export const generateStaticParams = definePageParameters(Router)

const PageRouter = definePageRouter(Router)

export default PageRouter;