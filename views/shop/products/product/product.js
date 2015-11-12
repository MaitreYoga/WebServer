/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProductController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams  ) {
    $scope.init = function () {
		$http.get('/ZenLounge/products/ + $routeParams.id)
		      .success(function (response) {
                $scope.product = response;
			    if (response === undefined || response === null) {
				    $scope.errorMessage = "Error : the product N°" + $routeParams.id + " doesn't exist";
				    $scope.product = undefined;
			    } else {
                    $scope.errorMessage = undefined;
				    $scope.product = response;
			    }
		    });
	};
	$scope.init();
}]);