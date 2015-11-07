/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('UsersController', ['$scope', '$http', function($scope, $http){
    $scope.getUsers = function () {		
		$http.get('/ZenLounge/Users')
		.success(function(response)
		{
			$scope.users = response;
		});
    };
}]);