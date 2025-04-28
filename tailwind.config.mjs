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
				'c_mauve': '#f5c2e7',
				'c_crust': '#11111b',
				'c_text': '#cdd6f4',
				'c_surface0': '#313244',
			},

		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
