var usuarios = require('../controllers/usuarios');	
var tareas = require('../controllers/tareas');
var recursos = require('../controllers/recursos');
var passport = require('./passport');
var multiparty = require('connect-multiparty')();

module.exports = function(app){

	app.get('/partials/*', function(req, res) {
	  	res.render('../../public/app/' + req.params['0']);
	});

	app.post('/registro', usuarios.registro);

	app.post('/login', usuarios.login);

	app.post('/logout', usuarios.logout);

	app.get('/session', usuarios.userAuthenticated);

	app.get('/auth/twitter',passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', 
		passport.authenticate('twitter', { 
			successRedirect: '/',
			failureRedirect: '/login' 
		}));

	app.post('/tareas', tareas.guardar);

	app.get('/tareas', tareas.getTareas);

	app.post('/tareas/finalizadas', tareas.guardarFinalizadas);

	app.post('/recurso', multiparty, recursos.guardar_recurso);

	app.get('/recursos/recibidos', recursos.getRecursosRecibidos);

	app.get('/recursos/enviados', recursos.getRecursosEnviados);

	app.get('*', function(req, res) {
	  	res.render('index');
	});
};