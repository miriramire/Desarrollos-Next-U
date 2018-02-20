var models = require('./models'),
Schema = models.Schema;

var usuarioSchema = new Schema({
	nombre: String,
	nombre_usuario: String,
	password: String,
	twitter: String
});

var Usuario = models.model('Usuario', usuarioSchema, 'usuarios');
module.exports = Usuario;