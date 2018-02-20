var passport = require('passport');
var Usuario = require('../models/usuarios');

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
module.export = passport;