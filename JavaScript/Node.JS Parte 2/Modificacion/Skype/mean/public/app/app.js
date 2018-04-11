var app = angular.module('Teamapp',['ui.router', 'ngAnimate', 'toastr']);

app.config(['$stateProvider',"$urlRouterProvider", "$locationProvider", "$urlMatcherFactoryProvider", function($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider){
	$urlRouterProvider.otherwise('/login');
	$locationProvider.html5Mode(true);

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
			templateUrl : 'partials/chat/templates/chat.html',
			controller : 'chatCtrl'
		})
		.state('app.chat.general',{
			url : '/general',
			templateUrl : 'partials/chat/templates/general.html',
			controller : 'chatCtrl'
		})
		.state('app.chat.individual',{
			url : '/:id_chat',
			templateUrl : 'partials/chat/templates/individual.html',
			controller : 'chatCtrl'
		})
		.state('app.tareas',{
			url : '/tareas',
			templateUrl : 'partials/tareas/templates/tareas.html',
			controller : 'tareasCtrl'
		})
		.state('app.recursos',{
			url : '/recursos',
			templateUrl : 'partials/recursos/templates/recursos.html',
			controller : 'recursosCtrl'
		})

		.state('app.recursos.crear', {
			url : '/crear',
			templateUrl : 'partials/recursos/templates/crear.html',
			controller : 'recursosCtrl'
		})

		.state('app.recursos.enviados', {
			url : '/enviados',
			templateUrl : 'partials/recursos/templates/enviados.html',
			controller : 'enviadosCtrl'
		})

		.state('app.recursos.recibidos', {
			url : '/recibidos',
			templateUrl : 'partials/recursos/templates/recibidos.html',
			controller : 'recibidosCtrl'
		})

		.state('app.recursos.detalle',{
			url : '/:id_recurso',
			templateUrl : 'partials/recursos/templates/detalle.html',
			controller : 'detalleCtrl'
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