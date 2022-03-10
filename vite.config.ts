// https://vitejs.dev/config/
import { defineConfig } from "vite";
// npm i --save-dev @types/node
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import * as path from "path";

function pathResolve(dir: string) {
  return path.resolve(__dirname, dir);
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //路径别名
    alias: {
      "@": pathResolve('./src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
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
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  build: {
    outDir: 'dist',
    assetsDir:'dist/assets',
    minify: "esbuild",
    polyfillModulePreload:true,
    assetsInlineLimit: 4096,
    cssCodeSplit:true,
  }
});
