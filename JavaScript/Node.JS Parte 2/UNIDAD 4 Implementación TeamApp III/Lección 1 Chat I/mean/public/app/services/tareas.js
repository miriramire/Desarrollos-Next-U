angular.module('Teamapp').factory('TareasService', function($http){
	
	return {
		getTareas : function(){
			return $http.get('/tareas');
		},
		getTareasFinalizadas : function(){
			return $http.get('/tareas/finalizadas');
		},
		guardarTareas : function(datos){
			return $http.post('/tareas', datos);
		}, 
		guardarFinalizadas : function(ids){
			return $http.post('/tareas/finalizadas', ids);
		}
	}
});