// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
     devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server', // <--- AÑADE O CAMBIA A 'server'
  // @ts-ignore
  adapter: vercel(),
});
