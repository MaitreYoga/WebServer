/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('EventController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams  ) {
    $scope.init = function () {
		$http.get('/ZenLounge/events?id=' + $routeParams.id)
		      .success(function (response) {
                $scope.event = response;
			    if (response === undefined || response === null) {
				    $scope.errorMessage = "Error : the event N°" + $routeParams.id + " doesn't exist";
				    $scope.event = undefined;
			    } else {
                    $scope.errorMessage = undefined;
				    $scope.event = response;
			    }
		    });
	};
	$scope.init();
}]);