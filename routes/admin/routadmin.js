var accion=require('../generales.js');
var jwt= require('jsonwebtoken');
var acc=new accion();

module.exports=function(app){


	panel_admin=function(req,res,next){
		if(req.headers){

			console.log("este es el token"+req.headers.tokenGetter);
		}else { console.log("no es esto!!! buen intento");}
		if(req.headers.authorization){
				var autorizacion=req.headers.authorization.split(" ")[1];
				console.log("estamos entrando"+autorizacion);
			}else {console.log("no lamento pero ni hay cabezera revisa bien");}
		
		res.render("admin",{});

	}

	app.get("/admin/:user",panel_admin);
	
}