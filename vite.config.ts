// https://vitejs.dev/config/
import { defineConfig } from "vite";
// npm i --save-dev @types/node
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import * as path from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    //路径别名
    alias: {
      "@":path.resolve(__dirname,'./src')
    }
    //   [
    //   {
    //     find: /\/@\//,
    //     replacement: pathResolve("src") + "/",
    //   },
    //   {
    //     find: /\#\//,
    //     replacement: pathResolve("types") + "/",
    //   },
    // ],
  },
  //支持使用tsx语法
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: 'import {h} from "vue";',
  },
});
