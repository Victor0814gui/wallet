import { app, ipcMain, dialog, BrowserWindow } from "electron";
import * as path from "path";
import __cjs_url__ from "node:url";
import __cjs_path__ from "node:path";
import __cjs_mod__ from "node:module";
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require2 = __cjs_mod__.createRequire(import.meta.url);
let mainWindow;
async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths[0];
  }
}
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1220,
    height: 760,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#ffffff",
      symbolColor: "#000000",
      height: 40
    },
    webPreferences: {
      preload: path.join(__dirname, "/../preload/preload.js"),
      webSecurity: false
    }
  });
  mainWindow.loadURL("http://localhost:5174/dashboard");
  mainWindow.on("closed", () => mainWindow = null);
}
app.whenReady().then(() => {
  ipcMain.handle("dialog:openFile", handleFileOpen);
  createWindow();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
