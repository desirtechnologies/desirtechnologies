import { h, render, component, ComponentDefinition, Message, Dispatcher } from 'npm:fpreact';

type ComponentError = {
    message: string;
    code: string;
    details?: unknown;
};

export function defineComponent<Model, Msg extends Message<any, any>, Props = {}>(
    definition: ComponentDefinition<Model, Msg, Props>
): ReturnType<typeof component> {
    if (!definition) {
        throw {
            message: "Component definition is required",
            code: "INVALID_DEFINITION"
        } as ComponentError;
    }

    if (typeof definition.update !== 'function') {
        throw {
            message: "Component must have an update function",
            code: "MISSING_UPDATE"
        } as ComponentError;
    }

    if (typeof definition.view !== 'function') {
        throw {
            message: "Component must have a view function",
            code: "MISSING_VIEW"
        } as ComponentError;
    }

    try {
        return component(definition);
    } catch (error) {
        throw {
            message: "Failed to create component",
            code: "COMPONENT_CREATION_ERROR",
            details: error
        } as ComponentError;
    }
}

enum Msg {
    UpdateName,
}

interface Model {
    name: string;
}

type UpdateNameMessage = Message<Msg.UpdateName, string>;

const Greet = defineComponent<Model, UpdateNameMessage>({
    update(model: Model = { name: 'world' }, msg: UpdateNameMessage) {
        switch (msg.kind) {
            case Msg.UpdateName:
                return { ...model, name: msg.value };
        }
        return model;
    },

    view(model: Model, dispatch: Dispatcher<UpdateNameMessage>) {
        return (<></>));
    },
});
