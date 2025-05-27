import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.0v1X7aT9.js","_app/immutable/chunks/tajRd5K2.js","_app/immutable/chunks/49IP7FES.js"];
export const stylesheets = ["_app/immutable/assets/0.BGYMogBs.css"];
export const fonts = [];
