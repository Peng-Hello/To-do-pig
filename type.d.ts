/*
 * @Author: lzp
 * @Date: 2022-12-31 19:39:22
 * @LastEditors: lzp
 * @LastEditTime: 2022-12-31 19:41:42
 * @Description: Do not edit
 */
interface IElectronAPI {
  openRemindWindow(): void;
}
interface Window {
  openWindow: IElectronAPI;
}
