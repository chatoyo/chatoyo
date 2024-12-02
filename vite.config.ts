import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import {fileURLToPath, URL} from 'node:url'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // imports: ['vue'],
            eslintrc: {
                enabled: true, // <-- this
            },
        }),

    ],
    resolve: {
        alias: {
            '@':
                fileURLToPath(new URL('./src', import.meta.url)),
            '@assets':
                fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@config':
                fileURLToPath(new URL('./src/config', import.meta.url)),
            '@pages':
                fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@layouts':
                fileURLToPath(new URL('./src/layouts', import.meta.url)),
            '@utils':
                fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@static':
                fileURLToPath(new URL('/', import.meta.url)),
        }
    }
})
