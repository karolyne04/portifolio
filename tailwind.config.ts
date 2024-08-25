import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1E56',
        sec: '#323232',
        ter: '#FFAC41',
        backHabilities: '#ff1e56b3',
        five: '#355C7D',
        seis: '#003C43',
        
        
      }
      // backgroundImage: {
      //     'hero-pattern': "url('/../public/imagem.png')",
      //     // 'footer-texture': "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [],
};
export default config;
