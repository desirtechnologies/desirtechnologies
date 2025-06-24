import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";


import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Desir Technologies",
	subtitle: "Undestanding determines destiny.",
	lang: "en",
	themeColor: {
		hue: 250,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: true,
			text: "AREPO",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [

	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/desir-technology", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Desir Technologies",
	bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
		},
		{
			name: "YouTube",
			icon: "fa6-brands:youtube",
			url: "https://github.com/desirtechnologies/desirtechnologies",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.com/invite/desirtechnologies",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://instagram.com",
		}
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
