
//var jwt= require('jsonwebtoken');
var mongoose = require('mongoose');
//tabla usuario
var servicio=require('../servicios/codificacion.js')

var UsuarioEsquema=mongoose.Schema({

	nombre : {type: String , required: true},
	apellido:{type: String, required: true},
	email: {type: String, required:true},
	pass:{type:String, required:true}
});

var T_usuario= mongoose.model("usuario",UsuarioEsquema);

var dbusuarios = function(){

//login de los usuarios
	this.login=function(res,datos){
			T_usuario.findOne({email: datos.email,pass:datos.pass},function(err,user){
			if(err){
				return res.json("300|Email no esta disponible favor de cambiar");
			}if (!user){
		        return res.json("40| Emial no esta registrado");  
	    	}else{
	    				return res.send({token:servicio.createToken(user)});
			}
		});
	}
//registro de usuarios
	this.registrar= function(res, datos){
		T_usuario.findOne({email:datos.email},function(err,user){
			if(err){
				return res.json("problemas de conexión");
			}
			if(!user){
				var registro = new T_usuario({
					nombre:datos.nombre,
					apellido:datos.apellido,
					email:datos.email,
					pass:datos.pass
				});
				registro.save(function(error,respuesta){
					if(error){
						return res.json("tenemos problemas de registro");
					}else {
						return res.send({token:servicio.createToken(user)});
					}

				});
			}else{

				res.json("lo sentimos pero el usuario ya existe!");
			}
		});
	}

//checamos clave


//listamos a los usuarios
	this.listar_usuario=function(res){
		T_usuario.find({},function(err,datos){
			if(err){
				console.log("ERROR:"+err);
			}else{
				 res.json(datos);
			}
		});
	}
	//vericamos si existe el usuario
	this.existencia_usuario=function(res,dato){
		T_usuario.findOne({email:dato.email},function(err,si){
			if(err){res.json("problemas en la conexion");}
			if(!si){res.json("no existe el suario");}else { res.json("el usuario existe");}
		})
	}	
	//encriptar contraseña
	this.encriptar=function(user,pass){
		var crypto=require('crypto');
		var encripto=crypto.createHmac('sha1', user).update(pass).digest('hex');
		return encripto;

	}
}

//exportamos el modulo!! importanre
module.exports = dbusuarios;


