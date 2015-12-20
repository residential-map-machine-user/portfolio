var  socketio = require('socket.io');
module.exports = sio;
function sio(server){
  var io = socketio(server);
  console.log('socket io is initialized');
  io.on('connection', function(socket){
		var messages = {};
		messages.data = [];
		messages.data[1] = { id:'123', message: "Hi I'm Yuki? Please send me a message!"};
		socket.emit("receive_message_log", messages)
		socket.on("sendmessage", function (data) {
			console.log(data);
			socket.emit("servermessage",data)
		})
  });
}
