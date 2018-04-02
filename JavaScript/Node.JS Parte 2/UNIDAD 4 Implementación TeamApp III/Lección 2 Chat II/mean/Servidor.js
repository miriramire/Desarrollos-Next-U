//Toda la creación y configuración del servidor de Node.js

var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

//Se agregó
var config = {
	rootPath : __dirname
};

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

require('./server/config/socket')(server);


server.listen(3000, function(){
	console.log("Servidor corriendo en el puerto: 3000");
});
