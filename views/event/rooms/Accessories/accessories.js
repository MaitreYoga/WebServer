
angular.module('ZenLounge').controller('AccessoriesController', ['$scope', 'webcallservice', function ($scope, webcallservice) {

 $scope.getAccessories = webcallservice.getAccessories(function (data) {
        $scope.accessories = data.accessories;
        alert('ok');
    });
 $scope.getRooms = webcallservice.getRooms(function (data) {
        $scope.rooms = data;
        alert('ok');
    });
    

    	$scope.recherche ="";
		/*$scope.Rooms =  [
        {
            name:"chaussures adidas",
            surface:60
         
        },
        {
            name:"chaussures nike",
            surface:80
        }
    ];
*/
/*
    var getAccessRoomName = function() {
        for(j=0;j<$scope.accessories.length;j++) {
            for (i=0; i< $scope.rooms.length;i++) {
                if($scope.rooms[i].id == $scope.accessories[j].idroom) {
                    $scope.accessories[j].idroom=$scope.activities[i].name;
                }
            }
        }
    };*/
    $scope.isSearched = function(index) {
            if($scope.recherche=="" || $scope.accessories[index].name.indexOf($scope.recherche)>-1) {
                return 1 ;
            }
            else {
                return 0;
            }
         
    };


	}]);