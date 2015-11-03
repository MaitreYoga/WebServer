var app = angular.module('ZenLounge', []);

app.controller('UserController', function($http, $scope){
	$scope.result = "1";
	this.HelloWorld = function()
	{
		$http.get('http://localhost:8080/ZenLounge/HelloWorld').success(function(response){alert(response+"\n"+response.data+"\n"+response.status+"\n"+response.headers); $scope.result = response.data});
	};
});