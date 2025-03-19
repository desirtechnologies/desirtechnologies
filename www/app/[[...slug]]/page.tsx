import { routes } from "@/routes";

import { definePage, definePageParameters } from "@/definitions"

const Router = routes("static") 

export const generateStaticParams = await definePageParameters(Router)

const IndexPage = definePage(Router)

export default IndexPage;