angular.module('Teamapp').service('ToastService', function (toastr){
	
	this.success = function(msg){
		toastr.success(msg);
	},
	this.error = function(msg){
		toastr.error(msg);
	}
});