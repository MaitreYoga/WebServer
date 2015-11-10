/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProductsController', ['$scope','webcallservice', function($scope, webcallservice){
    $scope.getUsers = webcallservice.getUsers(function(data) {
		$scope.users=data;
	});
}]);