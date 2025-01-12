import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import { viteMockServe } from 'vite-plugin-mock';
import { devServerOptions } from './config/dev.ts';

// https://vite.dev/config/
export default defineConfig({
  server: devServerOptions,
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      eslintrc: {
        enabled: true // <-- this
      }
    }),
    Components({
      resolvers: [PrimeVueResolver()]
   }),
    viteMockServe({
      mockPath: 'mock',
      enable: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@static': fileURLToPath(new URL('/', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@models': fileURLToPath(new URL('./src/models', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url))
    }
  }
});
