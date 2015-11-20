/**
 * Created by camilledelm on 15/11/15.
 */
angular.module('ZenLounge').controller('CreateRoomController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
	/*$scope.getActivities = webcallservice.getActivities(function (data) {
		$scope.activities = data;
	});
	
	$scope.getRooms = webcallservice.getRooms(function (data) {
		$scope.rooms = data;
	});*/

	
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
	
	$scope.create= function()



}]);