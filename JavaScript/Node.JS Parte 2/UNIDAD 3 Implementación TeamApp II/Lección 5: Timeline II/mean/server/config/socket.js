module.exports = function(server){
	var io = require('socket.io')(server);

	io.on('connection', function(socket){
		socket.on('nueva:tarea', function(data){
			io.emit('nueva:accion', data);
		});
		socket.on('nueva:recurso', function(data){
			io.emit('nueva:accion', [data]);
		});
	});
};