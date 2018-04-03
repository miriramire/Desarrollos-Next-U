angular.module('Teamapp').factory('ChatService', function ($http) {
	return {
		crearDarConversacion : function(destinatario){
			return $http.post('/conversacion', destinatario);
		}
	}
});