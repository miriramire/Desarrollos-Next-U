angular.module('Teamapp').factory('Session', function($http, $state, $rootScope){

	

	function Usuario(){

		this.logIn = function(usuario){
			return $http.post('/login', usuario);
		}

		this.getUsuario = function(){
			return $http.get('/session');
		};

		this.logOut = function(){
			return $http.post('/logout');
		}

		this.isLogged = function(usuario){	
			return $http.get('/session');
		}

	}

	var Usuario = new Usuario();	

	var Session = {
		logIn : Usuario.logIn,
		getUsuario : Usuario.getUsuario,
		logOut : Usuario.logOut,
		isLogged : Usuario.isLogged
	}
	
	Usuario.getUsuario();
	Usuario.isLogged();
	return Session;

});