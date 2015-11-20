/**
 * Created by jorismaillet on 06/11/15.
 */
<<<<<<< HEAD
angular.module('ZenLounge').controller('EventsController', ['$scope', 'webcallservice', '$cookies', function ($scope, webcallservice, $cookies) {
    $scope.user=$cookies.getObject('loggedUser');
	
	$scope.getEvents = webcallservice.getEvents(function (data) {
		$scope.events = data;
		getActEvent();
		getRoomEvent();
		getSpeakerEvent();
		getRegistrations();
		isRepetitive();
	});
=======
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
>>>>>>> 9d72e247869fb788d0b0d4dbf526ee3f8c51d91f
	
	$scope.selectedAct="";
	
	$scope.getActivities=webcallservice.getActivities(function (data) {
		$scope.activities = data.activities;
<<<<<<< HEAD
		getActEvent();
		getRoomEvent();
		getSpeakerEvent();
		getRegistrations();
		isRepetitive();
	});
	
	$scope.getRooms=webcallservice.getRooms(function (data) {
		$scope.rooms = data.rooms;
		getActEvent();
		getRoomEvent();
		getSpeakerEvent();
		getRegistrations();
		isRepetitive();
	});
	
	$scope.getSpeakers=webcallservice.getSpeakers(function (data) {
		$scope.speakers = data.speakers;
		getActEvent();
		getRoomEvent();
		getSpeakerEvent();
		getRegistrations();
		isRepetitive();
	});
	
	$scope.registrations = webcallservice.getRegistrations(function (data) {
		$scope.registrations = data.registrations;
		getActEvent();
		getRoomEvent();
		getSpeakerEvent();
		getRegistrations();
		isRepetitive();
	});
	
	
	$scope.getRepetitives =webcallservice.getRepetitives(function (data) {
		$scope.repetitives = data.repetitives;
		getActEvent();
		getRoomEvent();
		getSpeakerEvent();
		getRegistrations();
		isRepetitive();
	});
=======
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
>>>>>>> 9d72e247869fb788d0b0d4dbf526ee3f8c51d91f
	
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
        if($scope.selectedAct=="" || $scope.selectedAct==$scope.events[index].activity){
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
	
	var getState = function() {
		
		for(j=0;j<$scope.events.length;j++) {
			for (i=0; i< $scope.registrations.length;i++) {
					$scope.event[j].eventState="Unregistered";
			}
		}
		
		for(j=0;j<$scope.events.length;j++) {
			for (i=0; i< $scope.registrations.length;i++) {
				if(($scope.registrations[i].idevent == $scope.events[j].id) && ($scope.registrations[i].idmember == $scope.user.id)) {
					$scope.event[j].eventState="Registered";
				}
			}
		}
	}
	
	var isRepetitive = function() {
		$scope.event[j].eventRepetitive="No";
		for(j=0;j<$scope.events.length;j++) {
			for (i=0; i< $scope.repetitives.length;i++) {
				if($scope.repetitives[i].id == $scope.events[j].id) {
					$scope.event[j].eventRepetitive="Yes";
				}
			}
		}
	}
	
	
}]);