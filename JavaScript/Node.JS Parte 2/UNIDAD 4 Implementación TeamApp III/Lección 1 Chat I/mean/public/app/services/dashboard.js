angular.module('Teamapp').factory('DashboardService', function($http){

	return {
		getTimeline : function(){
			return $http.get('/timeline');
		}
	}

});