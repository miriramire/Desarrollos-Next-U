angular.module('Teamapp').service('toastF', function(toastr){
	this.sucess = function(msg){
		toastr.sucess(msg);
	},
	this.error = function(msg){
		toastr.error(msg);
	}
});