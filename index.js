const server = require('./lib/server')

server().then((port) => console.log(`Started server on : ${port}`))
