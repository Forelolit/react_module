import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@pages': '/src/pages',
      '@modules': '/src/modules',
      '@ui': '/src/ui',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@app/styles/forward.scss" as *;
        `,
      },
    },
  },
});
