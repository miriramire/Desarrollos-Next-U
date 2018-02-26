var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
TwitterStrategy = require('passport-twitter').Strategy;
var Usuario = require('../models/usuario');

passport.serializeUser(function(user, done){
	if (user) {
		done(null, user);
	}
});

passport.deserializeUser(function(user, done){
	Usuario.findOne({_id: user._id})
	.exec(function(err, user){
		if (user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
});

passport.use('local', new LocalStrategy(
	function(username, password, done){
		Usuario.findOne({nombre_usuario : username})
		.exec(function(err, user){
			if (user && user.authenticate(password)) {
				return done(null, user);
			} else {
				return done(null, false)
			}
		});
	}));

passport.use(new TwitterStrategy{
	consumerKey: 'N2iOE9c27F5g7YRXR3uPrbq6c',
	consumerSecret: 'x7px9RSpkA9G4Qx1i7Q4Ysb3FLJNBrJoNQ012c1odan5qMwTzn',
	callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
},
function(token, tokenSecret, profile, done){
	Usuario.findOne({nombre_usuario:profile.username})
	.exec(function(err, usuario){
		if (err) {
			console.log(err);
			return done(err);
		}
		if (usuario) {
			usuario.twitter = profile;
			usuario.save(function(err, user){
				if (err) {
					return done(err);
				}
				done(null, user);
			});
		} else {
			new Usuario({
				nombre_usuario : profile.username,
				nombre: profile.displayName,
				twitter: profile
			}).save(function(err, usuario){
				if (!err) {
					return done(null, usuario);
				} else {
					return done(err);
				}
			});
		}
	});
});

module.export = passport;