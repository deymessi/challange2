//funciones generales
var app = angular.module("app", ["satellizer","ui.router"]);
app.config(function($authProvider,$stateProvider){

	$authProvider.loginUrl="/auth/login";
	$authProvider.signupUrl="/registro";
	$authProvider.tokenName="token";
	$authProvider.tokenPrefix="app";
	$authProvider.httpInterceptor = true;
	
	$stateProvider
	.state("inicio",{
		url: "",
		templateUrl:"views/inicio.html",
		controller:"listaProductos"
	})
	.state("login",{

		url: "/login",
		templateUrl:"views/login.html",
		controller:"login",
		controllerAs:"login"
	})
	.state("registrar",{

		url: "/registro",
		templateUrl:"views/registro.html",
		controller:"registro"
	})
	.state("privado",{

		url:"/privado",
		templateUrl:"views/privado",
		controller:"privado"
	})
	.state("info",{
		url:"/info",
		templateUrl:"views/inicio.html",
		controller:"info"
	})
});








