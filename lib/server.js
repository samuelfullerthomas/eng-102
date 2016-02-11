const express = require('express')
const path = require('path')

//  the module to export
module.exports = function start () {
  //  creates the server
  const app = express()
  //  tells it where the public directory is
  app.use(express.static('public'))
  // gives it instructions on what to do when someone gets bundle js
  // This is pretty basic routing. You can also handle other stuff with things like
  // app.get('someEndpoint', (req, res) => {res.send('some resposne')}), etc.
  app.get('/bundle.js', (req, res) => {
    //  we're sending a file! we helpfully use __dirname here, so that we get the absolute path of the local directory.
    // problems can be caused in production if we don't use the dirname
    res.sendFile(path.join(__dirname, '../dist/bundle.js'))
  })
  //  returns a promise
  return new Promise((resolve, reject) => {
    //  tells the server on what port to listen
    app.listen(3000, function () {
      //  resolves the above promise
      resolve(3000)
    })
  })
}
