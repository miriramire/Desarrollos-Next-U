angular.module('Teamapp').controller('chatCtrl', function($scope, Socket, Session){
	$scope.usuarios_conectados = [];

	if ($scope.usuarios_conectados.length <= 0) {
		Socket.emit.('usuarios');
	}

	Socket.on('usuarios:lista', function(usuarios){
		Session.getUsuario()
		.then(function(response){
			var user = response.data.user.user;
			var conectados = _.reject(usuarios, {_id : user._id});
			angular.copy(conectados, $scope.usuarios_conectados);
		});
	});
});