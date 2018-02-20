var Usuario = require('../models/usuarios');
var passport = require('../config/passport');

exports.registro = function(req, res, next){
	var usuario = new Usuario(req.body);
	usuario.save(function(err, usuario){
		if (err) {
			res.send({sucess: false, message: err});
		} else {
			req.logIn(usuario, function(err){
				if (!err) {
					res.send({logged: true, sucess: true, usuario: req.session.passport});
				} else {
					console.log(err);
					res.send({logged: false, sucess: true, usuario: usuario});
				}
			});
		}
	});
}