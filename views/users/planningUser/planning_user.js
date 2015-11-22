/**
 * Created by camilledelm on 21/11/15.
 */
angular.module('ZenLounge').controller('PlanningUserController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
	
	/*$scope.getEvents = webcallservice.getEvents(function (data) {
		$scope.events = data;
    });*/
	
	$scope.events = [
        {
			id:1,
			name:"Cours salsa",
            startDate:'2015-11-23 00:00:00',
            endDate:'2015-11-23 10:00:00'

        },
        {
            id:2,
			name:"Cours salsa",
            startDate:'2015-11-22 00:00:00',
            endDate:'2015-11-22 10:00:00'
        }
    ];
	
}]);