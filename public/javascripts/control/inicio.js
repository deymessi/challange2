app.controller("listaProductos",function($scope,rutaService){
		rutaService.enruta("GET","/usuarios",true,false).success(function(data){
			$scope.datos=data;
		})
});
app.controller("info",function($scope,rutaService){

	rutaService.enruta("POST","/info",false,false).then(function(result){

		console.log(result.data);
	})
});
