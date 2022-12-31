"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("openWindow",{openRemindWindow:()=>{e.ipcRenderer.send("openRemindWindow")}});
