declare module '*.toml' {
    const content: {
        [key: string | symbol]: string | number | boolean | Array<string | number | boolean> | { [key: string | symbol]: string | number | boolean } | null;
    };
    export default content;
}