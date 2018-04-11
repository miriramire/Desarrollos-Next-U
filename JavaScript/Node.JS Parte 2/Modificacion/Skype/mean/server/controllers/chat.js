var Chat = require('../models/chat');
var Usuario = require('../models/usuarios');
var ObjectId = require('mongoose').Types.ObjectId;
var async = require('async');
var _ = require('lodash');

exports.crear_dar_conversacion = function (req, res, next) {
	if (req.body.destinatario !== "general") {
		async.waterfall([
			function(callback){
				Chat.findOne({
					$or: [{
						$and: [{
							remitente: req.session.passport.user._id.toString()
						},{
							destinatario: req.body.destinatario
						}]
					},{
						$and: [{
							destinatario: req.session,passport.user._id.toString()
						}, {
							remitente: req.body.destinatario
						}]
					}]
				})
				.populate('remitente')
				.populate('destinatario')
				.exec(function(err, chat){
					console.log("Chat", chat, req.body.destinatario);
					callback(null, chat);
				})
			},
			function(chat, callback){
				if (chat) {
					var data = whoIsMe(req.session.passport.user, chat);
					callback(null, data);
				} else {
					var chat = new Chat({
						remitente: req.session.passport.user._id.toString(),
						destinatario: req.body.destinatario,
						tipo: 'individual'
					});
					chat.save(function(err, chat){
						if (!err) {
							async.waterfall([
								function(cb){
									Chat.populate(chat, {
										path:'destinatario',
										model: 'Usuario'
									}, function(err, r1){
										cb(null, r1);
									});
								},
								function(r1, cb){
									Chat.populate(r1, {
										path: 'remitente',
										model: 'Usuario'
									}, function(err, r2){
										cd(null, r2);
									})
								}], function(err, results){
									var data = whoIsMe(req.session.passport.user, results);
									callback(null, data);
								});
						}
					});
				}
			}], function(err, results){
				res.send(results);
			})
	} else {
		async.waterfall([
			function(callback){
				Chat.findOne({
					tipo: 'general'
				})
				.exec(function(err, chat){
					callback(null, chat);
				})
			}, function(chat, callback){
				if (chat) {
					callback(null, chat);
				} else {
					var chat = new Chat({
						tipo: 'general'
					});
					chat.save(function(err, chat){
						callback(null, chat);
					});
				}
			}], function(err, results){
				res.send({
					chat: results
				});
			});
	}
};

exports.enviar_mensaje = function(req, res, next){
	if (req.body.tipo == "individual") {
		Chat.findOne(
			{_id: req.body.chat},
			{mensajes: {
				$slice: 0
			}})
		.exec(function(err, chat){
			if (!err) {
				var datos = {
					contenido: req.body.contenido,
					destinatario: req.body.destinatario._id,
					remitente: req.session.passport.user._id
				};
				chat.mensajes.push(datos);
				chat.save(function(err, chat){
					if (!err) {
						async.waterfall([
							function(callback){
								Usuario.populate(chat, {
									path: 'mensajes.remitente'
								}, function(err, r1){
									if (err) {
										console.log("Error populate remitente: "+err);
									} else {
										console.log(r1);
									}
									callback(null, r1);
								});
							}, function(r1, callback){
								Usuario.populate(r1, {
									path: 'mensajes.destinatario'
								}, function(err, r2){
									if (err) {
										console.log("Error populate destinatario: "+err);
									} else {
										console.log(r2);
									}
									callback(null, r2);
								})
							}], function(err, mensaje){
								if (!err) {
									res.send(mensaje);
								} else {
									res.send({
										success: false,
										message: err
									});
								}
							})
					} else {

					}
				});
			} else {
				res.send({
					success: false,
					message: err
				});
			}
		});
	} else if (req.body.tipo == "general") {
		Chat.findOne({tipo: "general"})
		.exec(function(err, chat){
			if (!err) {
				var datos = {
					remitente: req.body.remitente,
					destinatario: req.body.destinatario,
					contenido: req.body.contenido
				};
				chat.mensajes.push(datos);
				chat.save(function(err, chat){
					if (!err) {
						Chat.populate(chat, {
							path: 'remitente',
							model: 'Usuario'
						}, function(err, chat){
							res.send(chat);
						});
					}
				});
			}
		});
	}
};

exports.get_mensajes_generales = function(req, res, next){
	Chat.find({
		tipo: 'general'
	})
	.populate('remitente')
	.exec(function(err, chat){
		if (!err) {
			res.send(chat);
		} else {
			console.log(err);
		}
	});
};

exports.get_mensajes_individuales = function(req, res, next){
	Chat.findOne({
		_id: req.params.id_chat
	})
	.populate('remitente')
	.populate('destinatario')
	.populate('mensajes.remitente')
	.populate('mensajes.destinatario')
	.exec(function(err, chat){
		if (!err) {
			var data = whoIsMe(req.session.passport.user, chat);
			res.send(data);
		} else {
			console.log}(err);
		}
	})
}


function whoIsMe(usuario, chat){
	var data = {
		chat: chat,
		yo: {},
		otro: {}
	};
	if (chat.destinatario._id == usuario._id) {
		data.yo = chat.destinatario;
		data.otro = chat.remitente;
	} else {
		data.yo = chat.remitente;
		data.otro = chat.destinatario;
	}
	return data;
};