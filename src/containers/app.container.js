import React from 'react'
const fs = require('browserify-fs')

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.files = fs.readdir('/', function(err, files) {
      console.log(err);
      console.log(files);
    })
  }

  render() {
    // const fontlist = this.files.map(function(filename) {
    //   return <div>filename</div>
    // })

    return (
      <div>lol</div>
    )
  }
}

export default AppContainer
