angular.module('Teamapp').controller('registroCtrl', function($scope, $http, $state){
	$scope.usuario = {};
	$scope.register = function(){
		$scope.enviado = true;
		$http.post('/registro', $scope.usuario)
		.then(function(response){
			var data = response.data;
			if (data.sucess) {
				if (data.logged) {
					$state.transitionTo('app.dashboard');
				} else {
					$state.go('login');
				}
			} else {
				console.log("Error al Registrarse");
				$scope.enviado = false;
			}
		})
	}
});