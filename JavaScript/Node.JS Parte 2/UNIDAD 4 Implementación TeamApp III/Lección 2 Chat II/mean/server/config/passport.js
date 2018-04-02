var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	TwitterStrategy = require('passport-twitter').Strategy;
var Usuario = require('../models/usuarios');

passport.serializeUser(function (user, done){
	if (user) {
		done(null, user);
	}
});

passport.deserializeUser(function (user, done){
	Usuario.findOne({_id : user._id})
	.exec(function (err, user){
		if(user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
	});
});

passport.use('local',new LocalStrategy(
	function(username, password, done){
		Usuario.findOne({nombre_usuario : username})
		.exec(function (err, user){
			if (user && user.authenticate(password)) {
				return done(null, user)
			}else{
				return done(null, false)
			}
		})
	}
));

module.exports = passport;