var Usuario = require('../models/usuarios');
var passport = require('../config/passport');

exports.registro = function(req, res, next){
	var usuario = new Usuario(req.body);
	usuario.save(function (err, usuario){
		if (err) {
			res.send({success : false, message : err});
		}else{
			req.logIn(usuario, function (err){
				if (!err) {
					res.send({logged: true, success: true, usuario : req.session.passport});
				}else{
					console.log(err);
					res.send({logged: false, success: true, usuario : usuario});
				}
			});
		}
	});

};


exports.login =	function (req, res, next){
	var auth = passport.authenticate('local', function (err, user){
		if (err) {
			console.log(err);
			return next(err);
		}
		if(!user){
			console.log("No hay usuario!");
			res.send({success : false});
		}else{
			req.logIn(user, function (err){
				if (err) {
					console.log("Error al loguearse!");
					return next(err)
				}
				res.send({success : true, user : user});
			});
			
		}
	});
	auth(req, res, next);
};

exports.userAuthenticated = function(req, res, next){
	if (req.isAuthenticated()) {
		res.send({user : req.session.passport, isLogged : true});
	}else{
		res.send({user : {}, isLogged : false});
	}
};


exports.logout = function(req, res, next){
	req.session.destroy(function(err){
		console.log("Logout");
		if (!err) {
			res.send({destroy : true});
		}else{
			console.log(err);
		}
	});
};