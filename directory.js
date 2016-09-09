const path = require('path')
const fs = require('fs-extra')
const config = require('./config')

class Directory {
  constructor(fullPath) {
    this.fullPath = fullPath
    this.files = fs.readdirSync(fullPath)
  }
}

module.exports = {Directory}
