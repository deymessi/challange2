//capitan.js este codigo se encarga de llevar y traer los recursos
app.service("rutaService",function($http){
	var rutaSvc={};
	rutaSvc.enruta=function(met,dir,datos){
		return $http({
			method:met,
			url:dir,
			data:datos
			
		})
	}
	return rutaSvc;

});
