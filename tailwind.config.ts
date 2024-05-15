import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					'100': '#191919',
				},
				light: {
					'100': '#EEEEEE',
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
export default config;
