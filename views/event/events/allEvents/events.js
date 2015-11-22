/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('EventsController', ['$scope', 'webcallservice','$cookies', function ($scope, webcallservice,cookies) {
    $scope.compteur = 0;

    $scope.compter=function() {
        $scope.compteur +=1;
        if($scope.compteur==5) {
            getActEvent();
            getRoomEvent();
            getSpeakerEvent();
            getPeriodEvent();
        }
    };

    $scope.getEvents = webcallservice.getEvents(function (data) {
		$scope.events = data;
        $scope.compter();
    });
	
	$scope.selectedAct="";

    webcallservice.getPeriods( function(response){
        $scope.periods=response.data;
        $scope.compter();
    } , function() {
        alert("cannot get periods");
    });

	$scope.getActivities=webcallservice.getActivities(function (data) {
		$scope.activities = data;
        $scope.compter();
    });

	$scope.getRooms=webcallservice.getRooms(function (data) {
		$scope.rooms = data;
        $scope.compter();
    });
	
	$scope.getSpeakers=webcallservice.getSpeakers(function (data) {
		$scope.speakers = data;
        $scope.compter();
    });

    $scope.register = function(event) {
        var registration={};
        registration.id=null;
        registration.idevent=event.id;
        registration.idstate=1;
        registration.idmember=cookies.getObject('loggedUser').idmember;
        webcallservice.register(registration,function() {alert('You have registred')})
    };
	
	/*$scope.registrations = webcallservice.getRegistrations(function (data) {
		$scope.registrations = data.registrations;
	});*/
 /*   id insci
    id getState()
    id member en post
    id event
*/
	
	$scope.recherche ="";

	$scope.isSearched = function(index) {
        if($scope.selectedAct=="" || $scope.selectedAct==$scope.events[index].idactivity){
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
				if($scope.activities[i].id == $scope.events[j].idactivity) {
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
				if($scope.speakers[i].id == $scope.events[j].idspeaker) {
					$scope.events[j].eventSpeakerName=$scope.speakers[i].job;
				}
			}
		}
    };

    var getPeriodEvent = function() {
        for(j=0;j<$scope.events.length;j++) {
            for (i=0; i< $scope.periods.length;i++) {
                if($scope.periods[i].id == $scope.events[j].idperiod) {
                    $scope.events[j].start=timeConverter($scope.periods[i].startdate);
                    $scope.events[j].end=timeConverter($scope.periods[i].enddate);
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
	};

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }
	
}]);