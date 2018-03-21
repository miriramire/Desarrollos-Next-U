var models = require('./models'),
Schema = models.Schema;

var charSchema = new Schema({
	remitente: {type: Schema.Types.ObjectId, ref: 'Usuario'},
	destinatario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
	tipo: String,
	mensajes: [{
		remitente: {type: Schema.Types.ObjectId, ref: 'Usuario'},
		destinatario: {type: Schema.Types.ObjectId, ref: 'Usuario'},
		contenido: String
	}]
});

var Chat = models.model('Chat', charSchema, 'chats');
module.exports = Chat;