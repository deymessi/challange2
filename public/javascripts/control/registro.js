//login y registro.js
app.controller("login",function($auth,$location,$scope,rutaService,$location){
 /*
	if($auth.getToken("token")){

		var token=$auth.getToken();

		rutaService.enruta("POST","/revisa_usuario",false,false).success(function(result){
			var cod=result.split("|");
			if(cod[0]!=0){
				location.href=cod[1];
			}else {$scope.info=cod[1];}
			
		})
			
	}*/

	$scope.loguear=function(usuario){
		$auth.login({

			email:usuario.email,
			pass:usuario.pass
		})
		.then(function(token){
			$location.path("/admin");
		})
		.catch(function(mensaje){
			$scope.info="imposible login";
		})

	}

});

app.controller("registro",function($auth,$location,$scope){
	
	$scope.registro=function(user){
		$auth.signup({
			nombre:user.nombre,
			apellido:user.apellido,
			email:user.email,
			pass:user.pass
		})
		.then(function(){

			$location.path("/admin");
		})
		.catch(function(mensaje){
			$scope.mensaje=mensaje;

		})
	}

})