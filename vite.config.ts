import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import {fileURLToPath, URL} from 'node:url'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue'],
            eslintrc: {
                enabled: true, // <-- this
            },
        }),

    ],
    resolve: {
        alias: {
            '@':
            new URL('./src', import.meta.url).path,
            '@assets':
            new URL('./src/assets', import.meta.url).path,
            '@config':
            new URL('./src/config', import.meta.url).path,
            '@pages':
            new URL('./src/pages', import.meta.url).path,
            '@layout':
            new URL('./src/portal', import.meta.url).path,
            '@utils':
            new URL('./src/portal/hooks', import.meta.url).path,
            '@static':
            new URL('/', import.meta.url).path,
        }
    }
})
