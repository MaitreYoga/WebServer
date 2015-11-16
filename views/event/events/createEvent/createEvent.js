/**
 * Created by camilledelm on 15/11/15.
 */
angular.module('ZenLounge').controller('CreateEventController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
	/*$scope.getActivities = webcallservice.getActivities(function (data) {
		$scope.activities = data;
	});
	
	$scope.getRooms = webcallservice.getRooms(function (data) {
		$scope.rooms = data;
	});*/

	$scope.selectedRoom="";
	$scope.selectedAct="";
	$scope.selectedSpeak="";
	
	$scope.rooms = [
        {
            id:1,
			name:"Room 1",
            surface:50,
            numberPeople:20
        },
        {
            id:2,
			name:"Room conference",
            surface:100,
            numberPeople:100
        }
	];
	
	$scope.activities = [
        {
            id:1,
			name:"Yoga"
        },
        {
            id:2,
			name:"Conference"
        }
	];
	
	$scope.speakers = [
        {
            id:1,
			firstName:"Martin",
			lastName:"Dupont"
        },
        {
            id:2,
			firstName:"Jeanne",
			lastName:"Smith"
        }
	];
	


}]);