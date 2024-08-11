/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)',
      },
      fontFamily: {
        sourcesans: ["Source Sans Pro", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        "prime-orange" : "#E23744",
        "bgwhitecol-1" : "#ffffff",
        "primary-blue": "#0E2368",
        "primary-gray-1": "#444957",
        "primary-gray-2": "#424961",
        "primary-gray-3": "#646874",
        "footer-col-1": "#828B9C",
        "primary-gray-border": "#93A2D361"
      },
      backgroundColor: {
        'default': '#ffffff',
      }
    },
  },
  plugins: [],
}
