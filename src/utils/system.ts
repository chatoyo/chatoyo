import {fileURLToPath, URL} from 'node:url'

export const getStaticPath = () => {
    if (process.env.NODE_ENV === 'production') {
        return fileURLToPath(new URL('public/', import.meta.url))
    }
    return fileURLToPath(new URL('/', import.meta.url))
}