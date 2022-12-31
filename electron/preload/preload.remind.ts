/*
 * @Author: lzp
 * @Date: 2022-12-31 20:30:57
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 20:32:05
 * @Description: Remind 小猪的 preload 脚本
 */
import { contextBridge, ipcRenderer } from "electron";
contextBridge.exposeInMainWorld("closeWindow", {
  closeRemindWindow: () => {
    ipcRenderer.send("closeRemindWindow");
  },
});
