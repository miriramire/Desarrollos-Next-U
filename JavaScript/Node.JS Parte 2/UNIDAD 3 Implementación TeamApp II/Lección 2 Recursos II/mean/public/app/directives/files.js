angular.module('Teamapp').directive('fileInput', function($parse) {
	return {
		restrict: 'A',
		link: function(scope, elm, attrs){
			elm.bind('chnage', function(){
				$parse(attrs.fileInput)
				.assign(scope, elm[0].files)
				scope.$apply();
			});
		}
	}
});