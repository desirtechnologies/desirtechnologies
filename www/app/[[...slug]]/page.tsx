import { routes } from "@/routes";

import { definePage, definePageParameters } from "@/definitions"

const Router = routes() 

export const generateStaticParams = await definePageParameters(Router.home.parameters)

const IndexPage = definePage(Router.home.views)

export default IndexPage;