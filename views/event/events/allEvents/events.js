/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('EventsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
    $scope.compteur = 0;

    $scope.compter=function() {
        $scope.compteur +=1;
        if($scope.compteur==4) {
            getActEvent();
            getRoomEvent();
            getSpeakerEvent();
        }
    };

    $scope.getEvents = webcallservice.getEvents(function (data) {
		$scope.events = data;
        $scope.compter();
    });
	
	$scope.selectedAct="";
	
	$scope.getActivities=webcallservice.getActivities(function (data) {
		$scope.activities = data.activities;
        $scope.compter();
    });
	
	$scope.getRooms=webcallservice.getRooms(function (data) {
		$scope.rooms = data.rooms;
        $scope.compter();
    });
	
	$scope.getSpeakers=webcallservice.getSpeakers(function (data) {
		$scope.speakers = data.speakers;
        $scope.compter();
    });
	
	$scope.recherche ="";
    
	/*$scope.activities= ["Yoga", "Fitness", "Salsa", "Conference"];
	$scope.events = [
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

        },
        {
            id:2,
			name:"Cours salsa",
            place:8,
            price:12,
            period:"14:00 - 16:00",
            startDate:"01/11/2015",
            endDate:"31/11/2015",
            eventAct:"Salsa",
            speaker:"jack",
			room:"room 1",
			state:"registered"
        },
        {
            id:3,
			name:"Conference",
            place:33,
            price:5,
            period:"10:00 - 12:00",
            startDate:"15/11/2015",
            endDate:"15/11/2015",
            eventAct:"Conference",
            speaker:"titi",
			room:"room conference",
			state:"unregistered"
        }
    ];*/
	$scope.isSearched = function(index) {
        if($scope.selectedAct=="" || $scope.selectedAct==$scope.events[index].eventAct){
            if($scope.recherche=="" || $scope.events[index].name.indexOf($scope.recherche)>-1) {
                return 1 ;
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    };
	
	var getActEvent = function() {
        for(j=0;j<$scope.events.length;j++) {
			for (i=0; i< $scope.activities.length;i++) {
				if($scope.activities[i].ID == $scope.events[j].activity) {
					$scope.events[j].eventActName=$scope.activities[i].name;
				}
			}
		}
    };
	
	var getRoomEvent = function() {
	for(j=0;j<$scope.events.length;j++) {
		for (i=0; i< $scope.rooms.length;i++) {
			if($scope.rooms[i].idRoom == $scope.events[j].room) {
				$scope.events[j].eventRoomName=$scope.rooms[i].name;
			}
		}
	}
    };
	
	var getSpeakerEvent = function() {
        for(j=0;j<$scope.events.length;j++) {
			for (i=0; i< $scope.speakers.length;i++) {
				if($scope.speakers[i].id == $scope.events[j].speaker) {
					$scope.events[j].eventSpeakerName=$scope.speakers[i].name;
				}
			}
		}
    };
	
	
}]);