const { app, dialog, BrowserWindow } = require('electron')
const fs = require('fs-extra')
const fontManager = require('font-manager')
const _ = require('lodash')
require('electron-reload')(__dirname)

let mainWindow

let weights = {
  100: 'Thin',
  200: 'Ultra Light',
  300: 'Light',
  400: 'Normal',
  500: 'Medium',
  600: 'Semi Bold',
  700: 'Bold',
  800: 'Ultra Bold',
  900: 'Heavy'
}

let widths = {
  1: 'Ultra Condensed',
  2: 'Extra Condensed',
  3: 'Condensed',
  4: 'Semi Condensed',
  5: 'Normal',
  6: 'Semi Expanded',
  7: 'Expanded',
  8: 'Extra Expanded',
  9: 'Ultra Expanded'
}

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(`file://${__dirname}/public/index.html`)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  let library = {
    'faces': {}
  }

  fontManager.getAvailableFonts((fonts) => {
    for (let font of fonts) {
      if (library.faces.hasOwnProperty(font.family)) {
        _.extend(library.faces[font.family].fonts, getFontAttributes(font))
      } else {
        library.faces[font.family] = {
          fonts: getFontAttributes(font)
        }
      }
    }

    console.log(library)

    fs.ensureDirSync('./public/js/json/')
    fs.writeJsonSync('./public/js/json/library.json', library)
    createWindow()
  })
})

function getFontAttributes(font) {
  let style = font.style
  let fontAttr = {}

  if (style == undefined) {
    if (_.has(weights, font.weight)) {
      style = weights[font.weight]
    } else {
      style = 'Unknown'
    }
  }

  fontAttr[style] = _.pick(font,
    ['path', 'postscriptName', 'weight', 'width', 'italic', 'monospace']
  )

  return fontAttr
}

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
