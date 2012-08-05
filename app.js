require("./poor_modules/poor-module.js")

var engine = require('engine.io')
  , server = engine.listen(8210);


server.on('connection', function (socket) {
  socket.send('utf 8 string');
  socket.test = 1009
  socket.on('message', function (message) {
    console.log(message)
    console.log(socket.test)
  })
});


