/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      backgroundImage: {
        'custom-gradient-rtl': 'linear-gradient(to left, #432262, #24212a)',
        'custom-gradient-ltr': 'linear-gradient(to right, #432262, #24212a)',
      },
    },
	},
	plugins: [require("daisyui")],
};
