var app = angular.module('Teamapp');

app.controller('chatCtrl', function($scope, $stateParams, $state, Socket, Session, ChatService){
	$scope.usuarios_conectados = [];
	$scope.chat = null;
	$scope.messagesList = [];
	$scope.message = {};

	$scope.messagesG = [];
	$scope.messages = [];

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

	$scoep.enviarMensajeIndividua = function(){
		Session.getUsuario()
		.then(function(response){
			var data = {};
			var nombre = response.data.user.user.nombre;
			data = {
				contenido: $scope.mensaje,
				tipo: 'individual',
				destinatario: {
					_id: $scope.otro._id.toString()
				},
				remitente: {
					nombre: nombre
				},
				chat: $scope.chat
			};
			$scope.messages.push(data);
			$scope.messagesList[$scope.chat] = $scope.messages;
			Socket.emit('nuevo:mensaje:individual', data);
			$scope.mensaje = "";
		});
	}

	$scope.goToChat = function(destino){
		ChatService.crearDarConversacion({destinatario: destino})
		.success(function(response){
			if (response.chat.tipo == "individual") {
				$state.go('app.chat.individual', {
					id_chat : response.chat_id
				});
				$scope.yo = response.yo;
				$scope.otro = response.otro;
			} else {
				$state.go('app.chat.general')
			}
		});
	}

	$scope.getTipoChat = function(callback){
		var id = $stateParams.hasOwnProperty('id_chat');
		if (id) {
			callback($stateParams.id_chat);
		}
	};

	$scope.whereIAm = function(){
		$scope.getTipoChat(function(tipo){
			$scope.chat = tipo;
		});
	}();

	$scope.getMessagesChat = function(list){
		var messages = list[$scope.chat];
		return messages;
	};

	Socket.on('usuarios:lista', function(usuarios){
		Session.getUsuario()
		.then(function(response){
			var user = response.data.user.user;
			var conectados = _.reject(usuarios, {_id : user._id});
			angular.copy(conectados, $scope.usuarios_conectados);
		});
	});

	Socket.on('mensaje:general', function(mensaje){
		if ($scope.messagesList && $scope.chat) {
			$scope.messagesList[$scope.chat].push(mensaje);
		}
	});

	Socket.on('mensaje:individual', function(mensaje){
		if ($scope.messagesList) {
			if (mensaje.chat && $scope.chat) {
				if ($scope.messagesList.hasOwnProperty(mensaje.chat)) {
					$scope.messagesList[mensaje.chat].push(mensaje);
				} else {
					$scope.messagesList[mensaje.chat] = new Array();
					$scope.messagesList[mensaje.chat].push(mensaje);
				}
				console.log($scope.messagesList, $scope.chat, mensaje);
			}
		}
	});

	$scope.$on('$destroy', function(event){
		Socket.init();
	});
});