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