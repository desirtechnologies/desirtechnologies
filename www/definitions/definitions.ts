import React from "react";


export type ViewType = { component: React.FC<any>, props?: any }


export const defineLayout = function(parameters: any) {
    return parameters
}

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

export const defineLoaderPage = function(param: any) {
    return param
}

export const defineView = function(param: any) {
    return param
}


export const defineErrorPageRouter = function(param: any) {
    return param
}

export const definePage = function(views: ViewType[]) {
    const elements = views.map((view, index) => {
        return React.createElement(
            view.component,
            { key: index, ...view?.props }
        );
    });

    return function() {
        return React.createElement(
            React.Fragment,
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