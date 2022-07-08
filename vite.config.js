// vite.config.js
const {
    resolve
} = require('path')
const {
    defineConfig
} = require('vite')

import removeConsole from 'vite-plugin-remove-console';

module.exports = defineConfig({
    plugins: [
        removeConsole()
    ],
    base: '',
    esbuild: {
        drop: ['console', 'debugger'],
    },
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['./public'],
            strict: false,
        }
    },
    resolve: {
        alias: [{
            find: /^@\/(.+)/,
            replacement: resolve(__dirname, 'src') + '/$1',
        }, ],
    },
    build: {
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),

            }
        }
    },
})