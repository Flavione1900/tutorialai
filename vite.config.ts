import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Polyfill per permettere l'uso di process.env.API_KEY nel codice frontend
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    }
  };
});