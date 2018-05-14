
// --- ELECTRON BOILERPLATE, JUST VERIFY 'conf'

// The electron application entry point
// Start with "npm start"  (electron main.js)

const path = require('path')
const url = require('url')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


const conf = {
  WINDOW_WIDTH: 1000,
  WINDOW_HEIGHT: 800,
  OPEN_DEV_TOOLS: true,
  CLIENT_PATHNAME : path.join(__dirname, 'client/index.html')
}



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: conf.WINDOW_WIDTH, height: conf.WINDOW_HEIGHT})

  mainWindow.loadURL(url.format({
    pathname: conf.CLIENT_PATHNAME,
    protocol: 'file:',
    slashes: true
  }))
  

  // -- DEVTOOLS
  if (conf.OPEN_DEV_TOOLS) { mainWindow.webContents.openDevTools() } 
  // --
  

  mainWindow.on('closed', function () {
    mainWindow = null   // dereference other windows if multiwindow
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {  app.quit() }    // Mac
})

app.on('activate', function () {
  if (mainWindow === null) {  createWindow()  } // Mac
})


// In this file you can include the rest of your app's specific main process code. 
// You can also put them in separate files and "require" them here.

