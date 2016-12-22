import React from 'react'
import ReactDOM from 'react-dom'

import AppContainer from './containers/app.container'

class App extends React.Component {
  render() {
    return (
      <AppContainer
        dir='/fonts' />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
