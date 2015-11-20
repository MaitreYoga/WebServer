
angular.module('ZenLounge').controller('RoomsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {

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
    $scope.isSearched = function(index) {
            if($scope.recherche=="" || $scope.Rooms[index].name.indexOf($scope.recherche)>-1) {
                return 1 ;
            }
            else {
                return 0;
            }
         
    };


	}]);