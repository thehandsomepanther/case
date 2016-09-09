const {app, dialog, BrowserWindow} = require('electron')
const config = require('./config')
const fs = require('fs-extra')
const {Directory} = require('./directory')
require('electron-reload')(__dirname)

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', function() {
  createWindow()
  const dirpath = config.readSettings("dir")
  if (!dirpath) {
    dialog.showOpenDialog({ properties: ['openDirectory'] }, function(dirname) {
      config.saveSettings("dir", dirname[0])
      config.saveSettings("lastModified", new Date())
    })
  } else if (new Date(config.readSettings("lastModified")) < fs.statSync(dirpath).mtime) {
    config.saveSettings("lastModified", new Date())
  }

  const fontDir = new Directory(dirpath)
  console.log(fontDir.files)
})

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow !== null) {
    createWindow()
  }
})
