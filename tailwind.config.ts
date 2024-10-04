import type {Config} from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			TColor: {
				'50': '#232323',
				'100': '#FFE3E1',
				'150': '#E20F00',
				'200': '#28238A',
				'250': '#7D3E00',
				'300': '#4522C3',
				'400': '#ffffff',
			},
			bg: {
				'100': '#EAF5FF',
				'200': '#FFD5AB',
				'300': '#DDD3FF',
			},
		},
		plugins: [require('tailwindcss-animate')],
		extend: {
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
};
export default config;
