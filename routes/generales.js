//esta clase realiza funciones generales en todo el sistema

var acc=function(){

//checamos que las claves coincidan
	this.checa_clave=function(req){
				var token=null;
				if (!req.headers.authorization){
					return false;

				}else{
					var authorization=req.headers.authorization.split(" ");
					if(authorization.length==2){
					
						var key= authorization[0];
						var val=authorization[1];

						if(/^Bearer$/i.test(key)){
							return token=val.replace(/"/g, "");
						}else {return false};
					
					}
				}

	}
	
	this.get_llave=function(){
		return 'sanjuan3:16';
	}
}
module.exports=acc;