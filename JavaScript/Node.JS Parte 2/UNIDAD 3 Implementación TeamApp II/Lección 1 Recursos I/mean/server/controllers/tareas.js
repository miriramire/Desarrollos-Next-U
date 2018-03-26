var Tareas = require('../models/tareas');
var ObjectId = require('mongoose').Types.ObjectId;
var _ = require('lodash');

exports.guardar = function(req, res, next){

	//req.body.usuario = ObjectId(req.body.usuario);
	var tareas = new Tareas({
		descripcion : req.body.descripcion,
		usuario : req.session.passport.user._id.toString()
	});

	tareas.save(function (err, tarea){
		if (err) {
			console.log("err: "+err);
			res.send({success : false, message : err});
		}else{
			console.log("Guardado con exito!");
			res.send({success: true, tarea : tarea});
		}
	});
};


exports.getTareas = function(req, res, next){
	Tareas.find({usuario : req.session.passport.user._id.toString()})
	.exec(function (err, tareas){
		if (err) {
			console.log(err);
		}else{
			//console.log(tareas);
			res.send(tareas);
		}
	});
};

exports.guardarFinalizadas = function(req, res, next){
	var ids = req.body.ids;

	Tareas.find({_id : {$in : ids } })
	.exec(function (err, tareas){
		if (err) {
			console.log(err);
		}else{
			_.each(tareas, function(tarea){
				tarea.finalizada.estado = true;
				tarea.finalizada.fecha = new Date();
				tarea.save();
			});
			
			res.send(tareas);
		}
	});
};