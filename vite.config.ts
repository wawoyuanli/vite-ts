// https://vitejs.dev/config/
// npm i --save-dev @types/node
import { defineConfig,loadEnv ,ConfigEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
  base:"./",
  define:{
    'process.env':{}
  },
  plugins: [vue()],
  publicDir:'static',
  resolve: {
    //路径别名
    alias: {
      "@": path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js','.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      //配置全局scss
      scss: {
        additionalData:`@import "./src/assets/scss/global.scss";`,
      }
    }
  },
  //支持使用tsx语法
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: 'import {h} from "vue";',
  },
  server: {
    host: "0.0.0.0",
    port: 8989,
    strictPort: true,//设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口。
    open: "http://localhost:8989/#/login",
    proxy: {
      '/api': {
        target: 'https://www.huanhaoba.com/api/',// http://vue3.com/api/ https://weixin1.zsins.com/api/
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // '^/api/.*': {
      //   target: 'http://vue3.com/api/',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
    }
  },
  build: {
    outDir: process.env.NODE_ENV==='production' ? 'dist' : 'devDist',
    assetsDir:'assets',
    minify: "esbuild",
    polyfillModulePreload:true,
    assetsInlineLimit: 4096,
    cssCodeSplit:true,
  }
});
