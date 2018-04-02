var _ = require('lodash');
var usuarios = [];
module.exports = function(server){
	var io = require('socket.io')(server);

	io.on('connection', function(socket){

		socket.on('nueva:tarea',function(data){
			io.emit('nueva:accion', data);
		});

		socket.on('nuevo:recurso', function(data){
			io.emit('nueva:accion', [data]);
		});

		socket.on('disconnect', function(){
			var list = _.reject(usuarios, function(user){
				return user.socket === socket.id;
			});
			socket.emit('usuarios:lista', usuarios);
		});

		socket.on('nuevo:usuario', function(data){
			var index = _.findIndex(usuarios, {_id : data.user._id});
			if (index > -1) {
				usuarios[index].socket = socket.id;
			} else {
				usuarios.push({_id : data.user._id, socket: socket.id, nombre: data.user.nombre, nick: data.user.nombre_usuario})
			}
			console.log(usuarios);
			socket.boradcast.emit('usuarios:lista', usuarios);
		});

		socket.on('nuevo:mensaje:general', function(mensaje){
			io.emit('mensaje:general', mensaje);
		});

		socket.on('usuarios', function(data){
			socket.emit('usuarios:lista', usuarios);
		});
	});
};