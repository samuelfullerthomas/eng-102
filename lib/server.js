const express = require('express')
const path = require('path')

module.exports = function start () {
  //  creates the server
  const app = express()
  //  tells it where the public directory is
  app.use(express.static('public'))
  // gives it instructions on what to do when someone gets bundle js
  app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'))
  })
  //  returns a promise
  return new Promise((resolve, reject) => {
    //  tells the server on what port to listen
    app.listen(3000, function () {
      resolve(3000)
    })
  })
}
