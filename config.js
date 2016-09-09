const nconf = require('nconf')
const config = nconf.file({ file: './case-config.json' })

function saveSettings(key, val) {
  config.set(key, val)
  config.save()
}

function readSettings(key) {
  config.load()
  return config.get(key)
}

module.exports = {
  saveSettings: saveSettings,
  readSettings: readSettings
}
