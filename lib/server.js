const express = require('express')
const path = require('path')

module.exports = function start () {
  const app = express()
  app.use(express.static('public'))
  app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'))
  })
  return new Promise((resolve, reject) => {
    app.listen(3000, function () {
      resolve(3000)
    })
  })
}
