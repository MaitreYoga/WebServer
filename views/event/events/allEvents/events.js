/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('EventsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
    $scope.getEvents = webcallservice.getEvents(function (data) {
		$scope.events = data;
	});
}]);