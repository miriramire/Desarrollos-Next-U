var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teamapp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexio'));
db.once('open', function callback(){
	console.log('Base de Datos Teamapp abierta');
});

module.exports = mongoose;