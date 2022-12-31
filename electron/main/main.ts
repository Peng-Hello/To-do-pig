/*
 * @Author: lzp
 * @Date: 2022-12-31 09:19:18
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 22:00:09
 * @Description: Electron 主进程
 */
import { app, BrowserWindow, Menu, ipcMain, screen } from "electron";
import * as path from "path";
const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.main.js"),
    },
  });
  if (app.isPackaged) {
    // 如果被打包了就加载 dist 中的文件
    win.loadFile("dist-electron/index.html");
  } else {
    // 本地开发配合 vite 的地址
    win.loadURL(process.env.VITE_DEV_SERVER_URL!);
  }
  Menu.setApplicationMenu(null); // 取消默认应用菜单栏
  ipcMain.on("openRemindWindow", (event) => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const remindWindow = new BrowserWindow({
      width: 412,
      height: 412,
      frame: false,
      x: width - 412,
      y: height - 412,
      transparent: true,
      alwaysOnTop: true, // 置顶窗口
      webPreferences: {
        preload: path.join(__dirname, "preload.remind.js"),
      },
    });
    ipcMain.on("closeRemindWindow", (event) => {
      const webContent = event.sender;
      const win = BrowserWindow.fromWebContents(webContent);
      win?.destroy(); // 关闭小猪
    });

    remindWindow.loadFile("other-render/remind.html");
  });
};
app.whenReady().then(() => createWindow());

// 关闭所有窗口事件
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
