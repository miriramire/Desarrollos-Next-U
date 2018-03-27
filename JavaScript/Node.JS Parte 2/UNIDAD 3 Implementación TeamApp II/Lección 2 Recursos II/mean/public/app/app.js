var app = angular.module('Teamapp',['ui.router', 'ngAnimate', 'toastr']);

app.config(['$stateProvider',"$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/app/dashboard');

	$stateProvider
		.state('app',{
			url : '/app',
			templateUrl : 'partials/index/templates/index.html',
			controller : 'indexCtrl'
		})
		.state('app.dashboard',{
			url : '/dashboard',
			templateUrl : 'partials/dashboard/templates/dashboard.html',
			controller : 'dashboardCtrl'
		})
		.state('app.chat',{
			url : '/chat',
			templateUrl : 'partials/chat/templates/chat.html'
		})
		.state('app.tareas',{
			url : '/tareas',
			templateUrl : 'partials/tareas/templates/tareas.html',
			controller : 'tareasCtrl'
		})
		.state('app.recursos',{
			url : '/recursos',
			templateUrl : 'partials/recursos/templates/recursos.html',
			controller: 'recursosCtrl'
		})
		.state('app.recursos.crear',{
			url : '/crear',
			templateUrl : 'partials/recursos/templates/crear.html',
			controller: 'recursosCtrl'
		})
		.state('app.recursos.enviados',{
			url : '/enviados',
			templateUrl : 'partials/recursos/templates/enviados.html',
			controller: 'enviadosCtrl'
		})
		.state('app.recursos.recibidos',{
			url : '/recibidos',
			templateUrl : 'partials/recursos/templates/recibidos.html',
			controller: 'recibidosCtrl'
		})
		.state('registro',{
			url : '/registro',
			templateUrl : 'partials/sign/templates/registro.html',
			controller : 'registroCtrl'
		})
		.state('login',{
			url : '/login',
			templateUrl : 'partials/sign/templates/login.html',
			controller : 'loginCtrl'
		})


}]);