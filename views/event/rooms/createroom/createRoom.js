
angular.module('ZenLounge').controller('createRoomCtrl', ['$scope', 'webcallservice', function ($scope, webcallservice) {

    	$scope.recherche ="";
        $scope.newroom=   new Object();

    $scope.createRoom = function() {
        $scope.newroom.id="";
        webcallservice.CreateRoom($scope.newroom,function(data) {
            $scope.newroom="";
        })
    };



	}]);