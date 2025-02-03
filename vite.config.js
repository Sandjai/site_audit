import Inspect from 'vite-plugin-inspect';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.BACKEND_URL': JSON.stringify(env.BACKEND_URL)
      //__APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [
      Inspect(),
      injectHTML(),
      createHtmlPlugin({
        minify: true,
        /**
         * After writing entry here, you will not need to add script tags in `index.html`, the original tags need to be deleted
         * @default src/main.ts
         */
        // entry: 'src/assets/js/main.js',
        // entries: [
        //   {
        //     filename: 'index.html',
        //     template: 'index.html',
        //   },
        //   {
        //     filename: 'Hero.html',
        //     template: 'src/assets/Components/Hero/Hero.html',
        //   },
        // ],
        /**
         * Data that needs to be injected into the index.html ejs template
         */
        // inject: {
        //   data: {
        //     title: 'index',
        //     injectScript: `<script src="./inject.js"></script>`
        //   },
        //   tags: [
        //     {
        //       injectTo: 'body-prepend',
        //       tag: 'div',
        //       attrs: {
        //         id: 'tag'
        //       }
        //     }
        //   ]
        // }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname) + '/src/assets/'
      }
    }
  };
});
