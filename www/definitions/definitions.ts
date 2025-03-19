import React from "react";


export type ViewType = { component: React.FC<any>, props?: any }


export const defineLayout = (parameters: any) => {
    return parameters
}

export const defineMetadata = (parameters: any) => {
    return parameters
}

export function defineRoutes(parameters: any) {
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

export function defineView(param: any) {
    return param
}
export const definePage = (views: ViewType[]) => {

    const elements = views.map((view, index) => {

        return React.createElement(
            view.component,
            { key: index, ...view?.props }
        );
    });

    return () => {

        return React.createElement(
            React.Fragment,
            null,
            ...elements
        );
    };

};

export const definePageParameters = async (parameters: any) => async () => { return parameters }