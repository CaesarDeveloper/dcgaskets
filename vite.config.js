// vite.config.js
const {
    resolve
} = require('path')
const {
    defineConfig
} = require('vite')

import removeConsole from 'vite-plugin-remove-console';
import viteImagemin from 'vite-plugin-imagemin';

module.exports = defineConfig({
    plugins: [
        removeConsole(),
        viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      })
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
                nested: resolve(__dirname, 'informaciontecnica.html')
            }
        }
    },
})