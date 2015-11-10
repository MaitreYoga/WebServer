/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProfileController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.init = function () {
		$http.get('/ZenLounge/users?id='+$routeParams.id)
		.success(function(response)
		{
			$scope.user = response;
			if (response === undefined || response === null) {
				$scope.errorMessage = "Error : the user N°"+$routeParams.id+" doesn't exist";
				$scope.user = undefined;
			}
			else {
				$scope.errorMessage = undefined;
				$scope.user = response;
			}
		});
	};
	$scope.init();
}]);