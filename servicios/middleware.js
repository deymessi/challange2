//middleware.js
var jwt=require('jwt-simple');
var moment=require('moment');
var config=require('../config');

exports.autenticacion=function(req,res,next){

	if(!req.headers.authorization){
		console.log("no hay cabezera de autorizacion");
		return res.json("no hay autorizacion");
	}
	
	var token=req.headers.authorization.split(" ")[1];
	var payload=jwt.decode(token,config.TOKEN_SECRET);

	if(playload.exp<=moment().unix()){

		return res.json("tu sesion ha expirado");
	}
	console.log("si tiene");
	req.user=payload.sub;
	next();
}

exports.revisa_head=function(req,res,next){
	if(!req.headers.authorization){
		return res.json("0|"+"sesión expirada");
		
	}
	next();

}
