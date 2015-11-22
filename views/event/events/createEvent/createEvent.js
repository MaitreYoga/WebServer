/**
 * Created by camilledelm on 15/11/15.
 */
angular.module('ZenLounge').controller('CreateEventController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
	    $scope.compteur = 0;

    $scope.compter=function() {
        $scope.compteur +=1;
        if($scope.compteur==2) {
            getNameSpeaker();
        }
	};
	
	$scope.getActivities = webcallservice.getActivities(function (data) {
		$scope.activities = data;
	});
	
	$scope.getRooms = webcallservice.getRooms(function (data) {
		$scope.rooms = data;
	});

	$scope.getSpeakers = webcallservice.getSpeakers(function (data) {
		$scope.speakers = data
		$scope.compter();
	});
	
	$scope.getUsers = webcallservice.getUsers(function (data) {
		$scope.users = data;
		$scope.compter();
	});
	
	
	
	
	var getNameSpeaker = function() {
        for(j=0;j<$scope.speakers.length;j++) {
			for (i=0; i< $scope.users.length;i++) {
				if($scope.users[i].idspeaker == $scope.speakers[j].id) {
					$scope.speakers[j].speakerName=$scope.users[i].firstname;
				}
			}
		}
    };
	
	$scope.createEvent = function () {
        $scope.event.id = "";
        webcallservice.createEvent($scope.event, function (data) {
            alert("event created");
		})
	};
	
	/*$scope.rooms = [
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
	];*/
	


}]);