var models = require('./models'),
	Schema = models.Schema;

var recursosSchema = new Schema({
	archivos : [{type: String}],
	remitente : {type : Schema.Types.ObjectId, ref : 'Usuario'},
	destinatarios : [{type: String}],
	fecha : {type : Date, default : Date() },
	asunto : String
});

var Recursos = models.model('Recurso', recursosSchema, 'recursos');

module.exports = Recursos;