var Recurso = require('../models/recurso');
var ObjectId = require('mongoose').Types.ObjectId;

var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var async = require('async');

var newRecurso = new Recurso({});

exports.guardar_recurso = function(req, res, next){
	async.series({
		archivos: function(callback){
			if (req.files.file.length > 0) {
				var result = _.map(req.files.file, function(file, i){
					return guardar_archivos(req, res, i, file);
				});
				callback(null, result);
			} else {
				callback(null, guardar_archivos(req, res, 0, req.files.file));
			}
		},
		datos: function(callback){
			var data = {remitente: ObjectId(req.session.passport.user._id.toString()),
				destinatatios: req.body.destinatatios.split(','), asunto: req.body.asunto
			}
			callback(null, data);
		}
	}, function(err, result){
		if (!err) {
			guardar_recurso(result, function(recurso){
				res.send(recurso);
			});
		} else {
			res.send({msj: "Fallo"});
			console.log(err);
		}
	});
};

function guardar_archivos(req, res, i, file){
	var root = path.dirname(require.main.filename);
	var originalFilename = file.originalFilename.split('.');
	var ext = originalFilename[originalFilename.length-1] ;
	var nombre_archivo = newRecurso._id.toString()+'_'+i+'.'+ext;
	var newPath = root + '/public/recursos/'+nombre_archivo;
	var newFile = new fs.createWriteStream(newPath);
	var oldFile = new fs.createReadStream(file.path);
	var bytes_totales = req.headers['content-length'];
	var bytes_subidos = 0;

	oldFile.pipe(newFile);
	oldFile.on('data', function(chunk){
		bytes_subidos += chunk.length;
		var progreso = (bytes_subidos/bytes_totales)*100;
		res.write("progress: "+parseInt(progreso, 10)+'%\n');
	});

	oldFile.on('end', function(){
		console.log('Carga Completa');
		res.end('Carga Completa');
	});

	return nombre_archivo;
}

function guardar_recurso(result, callback){
	if (Array.isArray(result.archivos)) {
		newRecurso.archivos = result.archivos;
	} else {
		newRecurso.archivos.push(result.archivos);
	}
	newRecurso.asunto = result.datos.asunto;
	newRecurso.destinatatios = result.datos.destinatatios;
	newRecurso.remitente = result.datos.remitente;
	newRecurso.save();
	callback(newRecurso);
}