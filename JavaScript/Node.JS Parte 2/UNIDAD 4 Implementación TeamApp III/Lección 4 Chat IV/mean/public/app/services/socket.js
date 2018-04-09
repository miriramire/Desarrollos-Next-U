angular.module('Teamapp').factory('Socket', function($rootScope, Session) {
  var socket = io.connect();

  socket.on('connect', function(){
    Session.getUsuario()
    .then(function(response){
      var user = response.data.user;
      socket.emit('nuevo:usuario', user);
    });
  });
  
  return {
    init: function(){
      socket.removeAllListeners();
    }
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    },
    socket : function(){
      return socket
    }
  };
});