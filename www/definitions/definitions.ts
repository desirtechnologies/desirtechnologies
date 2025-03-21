/** @jsxImportSource preact */
import { h, Fragment } from "preact";
import { defineLayout  } from "$fresh/server.ts";

export type ViewType = { component: any, props?: any }


export const defineMetadata = function(parameters: any) {
    return parameters
}

export const definePageRouter = function(parameters: any) {
    return parameters
}

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

export const defineView = function(param: any) {
    return param
}

export const definePage = function(views: ViewType[]) {
    const elements = views.map((view, index) => {
        return h(
            view.component,
            { key: index, ...view?.props }
        );
    });

    return function() {
        return h(
            Fragment,
            null,
            ...elements
        );
    };
}

export const definePageParameters = function(parameters: any) {
    return async function() { 
        return parameters 
    }
} 