angular.module('Teamapp').factory('ChatService', function ($http) {
	return {
		crearDarConversacion : function(destinatario){
			return $http.post('/conversacion', destinatario);
		},
		enviarMensaje : function(data){
			return $http.post('/mensaje', data);
		},
		gerMensajesGenerales : function(data){
			return $http.post('/mensajes/general');
		},
		gerMensajesIndividuales : function(data){
			return $http.post('/mensajes/'+id.chat);
		}
	}
});