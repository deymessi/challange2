//codificacion.js --servicio codifica los permisos
var jwt=require('jwt-simple');
var moment=require('moment');
var config=require('../config.js');

exports.createToken=function(user){
	var payload={

		sub:user,
		iat:moment().unix(),
		exp:moment().add(4,"days").unix()

	};
	return jwt.encode(payload,config.TOKEN_SECRET);

}