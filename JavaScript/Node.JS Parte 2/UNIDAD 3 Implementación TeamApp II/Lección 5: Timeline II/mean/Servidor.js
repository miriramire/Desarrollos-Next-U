var express = require('express'),
app = express(),
server = require('http').createServer(app);

var config = {
	rootPath: __dirname
};

require('./server/config/express')(app, config);
require('./server/config/routes')(app);
require('./server/config/socket')(server);

server.listen(3000, function(){
	console.log("servidor corriendo en el puerto: 3000");
});
