/*
 * @Author: lzp
 * @Date: 2022-12-31 09:14:41
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 15:56:33
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 解决TailWind 与 Naive UI 的样式冲突
const meta = document.createElement("meta");
meta.name = "naive-ui-style";
document.head.appendChild(meta);

createApp(App).mount("#app");
