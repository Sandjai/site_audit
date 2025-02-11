import Inspect from 'vite-plugin-inspect';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    // define: {
    //   'process.env.BACKEND_URL': JSON.stringify(env.BACKEND_URL)
    //__APP_ENV__: JSON.stringify(env.APP_ENV)
    // },
    plugins: [
      Inspect(),
      injectHTML(),
      createHtmlPlugin({
        minify: true
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
        //     injectScript: ``
        //   },
        // tags: [
        //   {
        //     injectTo: 'body-prepend',
        //     tag: 'div',
        //     attrs: {
        //       id: 'tag'
        //     }
        //   }
        // ]
        // }
      })
    ],
    // !Заменить/Оставить пустым  Префикс для 'production' в зависимости от места развёртывания (/site_audit/ для gH Pages)
    base: mode === 'production' ? '/site_audit/' : '/',
    build: {
      rollupOptions: {
        // Указываем точку входа для отдельных файлов
        input: {
          main: '/index.html'
          // swiper: '/src/assets/js/swiper-bundle.min.js',
        }
        // output: {
        //   // Разделение файлов: основной бандл и отдельные файлы
        //   manualChunks(id) {
        //     if (id.includes('swiper-bundle.min.js')) {
        //       return 'separate';
        //     }
        //     return null; // Остальные файлы попадают в основной бандл
        //   },
        // },
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname) + '/src/assets/'
      }
    }
  };
});
