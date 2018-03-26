var models = require('./models'),
	Schema = models.Schema;

var timelineSchema = new Schema({
	usuario : {type : Schema.Types.ObjectId, ref : 'Usuario'},
	tarea : {type : Schema.Types.ObjectId, ref : 'Tarea'},
	recurso : {type : Schema.Types.ObjectId, ref : 'Recurso'},
	tipo : String,
	fecha : {type : Date, default : Date() },
	accion : String,
	descripcion : String
});

var Timeline = models.model('Timeline', timelineSchema);

module.exports = Timeline;