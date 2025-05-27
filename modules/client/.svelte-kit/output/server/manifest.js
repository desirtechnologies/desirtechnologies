export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BX9aoRKG.js",app:"_app/immutable/entry/app.BxSwmODt.js",imports:["_app/immutable/entry/start.BX9aoRKG.js","_app/immutable/chunks/BqKz_ntI.js","_app/immutable/chunks/tajRd5K2.js","_app/immutable/chunks/DduFbk6z.js","_app/immutable/entry/app.BxSwmODt.js","_app/immutable/chunks/tajRd5K2.js","_app/immutable/chunks/49IP7FES.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/jarveis",
				pattern: /^\/jarveis\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
