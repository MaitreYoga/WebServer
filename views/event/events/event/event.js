/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('EventController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams  ) {
    /*$scope.init = function () {
		$http.get('/ZenLounge/events/' + $routeParams.id)
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
	$scope.init();*/
	
	$scope.event = 
        {
            id:1,
			name:"Cours yoga",
            place:5,
            price:10,
            period:"10:00 - 12:00",
            startDate:"12/11/2015",
            endDate:"12/11/2015",
            eventAct:"Yoga",
            speaker:"toto",
			room:"room 13",
			state:"unregistered"

        };
	
	$scope.showRegisterButton = function() {
		if ($scope.event.state=="registered") {
			return false;
		}
		else {
			return true;
		}
	}
}]);