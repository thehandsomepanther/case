import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

var library

var req = new XMLHttpRequest();
req.overrideMimeType('application/json')
req.open('GET', './js/json/library.json', false)
req.send(null)

if (req.status == '200') {
  library = JSON.parse(req.responseText)
}

render(
  <Provider store={store}>
    <App library={library} />
  </Provider>,
  document.getElementById('app')
)
