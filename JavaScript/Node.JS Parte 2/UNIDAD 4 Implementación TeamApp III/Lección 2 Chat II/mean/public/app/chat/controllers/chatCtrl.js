var app = angular.module('Teamapp');

app.controller('chatCtrl', function($scope, $stateParams, $state, Socket, Session){
	$scope.usuarios_conectados = [];
	$scope.chat = "general";
	$scope.messageList = new Object();
	$scope.messageList[$scope.chat] = [];

	if ($scope.usuarios_conectados.length <= 0) {
		Socket.emit.('usuarios');
	}

	$scope.enviarMensajeGeneral = function(){
		Session.getUsuario()
		.then(function(response){
			var data = {};
			var nombre = response.data.user.user.nombre;
			data = {
				contenido: $scope.mensaje, 
				tipo: 'general',
				nombre: nombre
			};
			Socket.emit('nuevo:mensaje:general', data);
			$scope.mensaje = "";
		});
	}

	$scope.goToChat = function(){
		$state.go('app.chat.general');
	}

	Socket.on('usuarios:lista', function(usuarios){
		Session.getUsuario()
		.then(function(response){
			var user = response.data.user.user;
			var conectados = _.reject(usuarios, {_id : user._id});
			angular.copy(conectados, $scope.usuarios_conectados);
		});
	});

	Socket.on('mensaje:general', function(mensaje){
		if ($scope.messageList && $scope.chat) {
			$scope.messageList[$scope.chat].push(mensaje);
		}
	});
});