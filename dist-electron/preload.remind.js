"use strict";const e=require("electron");e.contextBridge.exposeInMainWorld("closeWindow",{closeRemindWindow:()=>{e.ipcRenderer.send("closeRemindWindow")}});
