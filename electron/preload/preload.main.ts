/*
 * @Author: lzp
 * @Date: 2022-12-31 09:27:01
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 19:13:10
 * @Description: 主进程的 preload 脚本
 */
import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("openWindow", {
  openRemindWindow: () => {
    ipcRenderer.send("openRemindWindow");
  },
});
