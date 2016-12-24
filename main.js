const { app, dialog, BrowserWindow } = require('electron')
const fs = require('fs-extra')
const fontManager = require('font-manager')
const { Directory } = require('./directory')
require('electron-reload')(__dirname)

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/public/index.html`)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  var fonts = fontManager.getAvailableFontsSync()
  
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow !== null) {
    createWindow()
  }
})
