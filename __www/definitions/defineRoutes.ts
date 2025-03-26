import { RouteParameters } from "@definitions/defineRoute.ts"

export type RoutesSchema = Array<RouteParameters>; 

export const defineRoutes = function(parameters: any) {
    return function (type?: "static" | "dynamic" | "hybrid" | "edge") {
        switch (type) {
            case "static":
                return parameters
            case "dynamic":
                return parameters
            case "hybrid":
                return parameters
            case "edge":
                return parameters
        }
    }
}
