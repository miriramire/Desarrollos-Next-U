var models = require('./models'),
	Schema = models.Schema;

var usuariosSchema = new Schema({
	nombre : String,
	nombre_usuario : String,
	password : String,
	twitter : Schema.Types.Mixed
});

usuariosSchema.methods = {
	authenticate : function(password){
		return this.password == password;
	}
}


var Usuario = models.model('Usuario', usuariosSchema, 'usuarios');

module.exports = Usuario;
