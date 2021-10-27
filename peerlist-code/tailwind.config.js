module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ["Poppins"],
		},
		color: {
			"gray-light": "#6A737D",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
