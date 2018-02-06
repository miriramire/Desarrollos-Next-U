var app = angular.module('Teamapp', ['ui.router']);

app.config(['$stateProvider', "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/app');
	$stateProvider.state('app', {
		url: '/app',
		templateUrl: 'partials/index/templates/index.html',
		controller: 'indexCtrl'
	});
}]);