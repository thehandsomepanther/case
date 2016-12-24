import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

var fonts = [
  {
    "id": 0,
    "path": "/System/Library/Fonts/Optima.ttc",
    "postscriptName": "Optima-BoldItalic",
    "family": "Optima",
    "style": "Bold Italic",
    "weight": 700,
    "width": 5,
    "italic": true,
    "monospace": false
  },
  {
    "id": 1,
    "path": "/Library/Fonts/STIXSizOneSymBol.otf",
    "postscriptName": "STIXSizeOneSym-Bold",
    "family": "STIXSizeOneSym",
    "style": "Bold",
    "weight": 700,
    "width": 5,
    "italic": false,
    "monospace": false
  }
]

var req = new XMLHttpRequest();
req.overrideMimeType('application/json')
req.open('GET', './js/json/fonts.json', true)
req.send(null)

req.onreadystatechange = function(text) {
  fonts = JSON.parse(text.currentTarget.responseText)
}

render(
  <Provider store={store}>
    <App fonts={fonts} />
  </Provider>,
  document.getElementById('app')
)
