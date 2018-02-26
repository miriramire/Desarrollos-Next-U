angular.module('Teamapp').controller('loginCtrl', function($scope, $http, $state, toastF, Session){
	$scope.master = {};
	$scope.signin = function(){
		var usuario = {username : $scope.usuario.username, password : $scope.usuario.password};
		Session.logIn(usuario)
		.then(function(response){
			if (response.data.sucess) {
				toastF.sucess('Iniciaste sesion correctamente');
				$state.transitionTo('app.dashboard');
			} else {
				toastF.error('Error en autenticacion, verifica tus datos');
				$scope.usuario = angular.copy($scope.master);
				$scope.form.$setPristine();
			}
		});
	}

	Session.isLogged()
	.then(function(response){
		var isLogged = response.data.isLogged;
		if (isLogged) {
			$state.go('app.dashboard');
		}
	});
})