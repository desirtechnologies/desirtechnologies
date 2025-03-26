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

