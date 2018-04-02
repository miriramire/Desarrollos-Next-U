angular.module('Teamapp').controller('tareasCtrl', function($scope, TareasService, Socket){
	var checkeados = [];

	$scope.tareas = [];
	$scope.tareas_finalizadas = [];
	$scope.item_master = {descripcion : "",  fecha : "", finalizada : false};
	$scope.date = new Date();


	$scope.guardar = function(){
		TareasService.guardarTareas({descripcion : $scope.item.descripcion})
		.then(function (response){
			if (response.data.success) {
				$scope.tareas.push(response.data.tarea);
				angular.copy($scope.item_master, $scope.item);
			}
		});
	}
	

	$scope.enviar_finalizadas = function(){
		//Saco solo los ids
		var ids = _.pluck(checkeados,'_id');
		TareasService.guardarFinalizadas({ids : ids})
		.then(function (response){
			_.each(response.data.lean, function(item){
				var item = item;
				$scope.tareas_finalizadas.push(item);
				_.remove($scope.tareas, function(tarea){
					return tarea._id === item._id;
				});

			});
			Socket.emit('nueva:tarea', response.data.populated);
		});
	}

	
	$scope.ordenarListas = function(response){
		var finalizadas = [];
		var no_finalizadas = [];
		_.each(response, function(item){
			if (item.finalizada.estado) {
				finalizadas.push(item);
			}else{
				no_finalizadas.push(item);
			}
		});
		angular.copy(no_finalizadas, $scope.tareas);
		angular.copy(finalizadas, $scope.tareas_finalizadas);

	}

	
	

	TareasService.getTareas()
	.then(function (response){
		$scope.ordenarListas(response.data);
	});


	$scope.$watchCollection("tareas | filter : {finalizada : {estado : true}}", function(newv, old){
		checkeados = newv;
	});
});