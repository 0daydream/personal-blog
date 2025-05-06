/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				unifont: ['Unifont', 'sans-serif'], // Use Unifont as the default sans font
				gohu: ['Gohu', 'sans-serif'], // Use Unifont as the default sans font
			},
			colors: {
				'c_mauve': '#c4a7e7',
				'c_crust': '#191724',
				'c_text': '#e0def4',
				'c_surface0': '#1f1d2e',
			},

		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
