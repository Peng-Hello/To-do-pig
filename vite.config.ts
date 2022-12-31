/*
 * @Author: lzp
 * @Date: 2022-12-31 09:14:41
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 20:35:16
 * @Description: Vite 配置
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        entry: "electron/main/main.ts",
      },
      {
        entry: "electron/preload/preload.main.ts",
      },
      {
        entry: "electron/preload/preload.remind.ts",
      },
    ]),
    AutoImport({
      imports: [
        "vue",
        {
          "naive-ui": [
            "useDialog",
            "useMessage",
            "useNotification",
            "useLoadingBar",
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  build: {
    outDir: "dist-electron",
  },
});
