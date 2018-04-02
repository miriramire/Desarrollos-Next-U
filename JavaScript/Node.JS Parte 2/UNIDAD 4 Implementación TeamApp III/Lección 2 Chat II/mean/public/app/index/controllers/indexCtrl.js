var app = angular.module('Teamapp');

app.controller('indexCtrl', function($rootScope,$state, $scope, Session){

	function Modulo(state){

		this.state = state.name;

		this.name = state.name.split('.')[1];

		this.getName = function(){
			return this.name && this.name[0].toUpperCase() + this.name.slice(1);
		};
	}
	
	$scope.modulo = new Modulo($state.current).getName();
	

	/////////*********Scopes********//////////

	$scope.logout = function(){
		Session.logOut()
		.then(function(response){
			if (response.data.destroy) {
				$state.go('login');
			}
		});
	}

	Session.getUsuario()
	.then(function(response){
		$scope.usuario = response.data.user.user;
	});

	Session.isLogged()
	.then(function(response){
		var isLogged = response.data.isLogged;
		if (!isLogged) {
			$state.go('login');
		}

	});


	//Events
	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
		$scope.modulo = new Modulo(toState).getName();
	});
});	



