import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { pages } from "../pages/pages.tsx";





export const routes = {
    index: {
        view: pages.index,
        model: {},
        controller: {}
    },
}