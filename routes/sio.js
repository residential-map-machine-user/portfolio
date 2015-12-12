var  socketio = require('socket.io');
module.exports = sio;
function sio(server){
  var io = socketio(server);
  console.log('socket io is initialized');
  io.on('connection', function(socket){
    socket.on('chat message', function(data){
      console.log(data);
      socket.emit('chat message', data);
    });
  });
  io.on('disconnect',function(){
    console.log('disconected');
  });
}
