	/* GET home page. */
	var dbusuarios=require('../models/dbusuarios.js');
	var sanitizer = require('sanitizer');
	var jwt= require('jsonwebtoken');
	var llave="sanjuan3:16";
	var mid=require('../servicios/middleware.js')
	var db = new dbusuarios();


	module.exports=function(app){
		//login de usuarios
		login=function(req,res,next){
			var pass=db.encriptar(req.body.email,req.body.pass);
			var user = {
					email: sanitizer.escape(req.body.email),
					pass:pass
				}
			db.login(res,user);
		}
		//registro de usuarios
		registro=function(req,res){
			var encriptar=db.encriptar(req.body.email,req.body.pass);
			var user={
				nombre:sanitizer.escape(req.body.nombre),
				apellido:sanitizer.escape(req.body.apellido),
				email:sanitizer.escape(req.body.email),
				pass:encriptar
			}
			db.registrar(res,user);
			
		}
//enlistamos usuarios
		listar_usuario=function(req,res){
			db.listar_usuario(res);
		}
//incio de la web
		inicio=function(req,res){

			res.render('index',{

				titulo:"challenge"
			});
		}
//checamos privilegios de token
		//api rest administrativas
		app.post('/auth/login',login);
		app.post('/registro',registro);
		app.get('/',inicio);


	}
