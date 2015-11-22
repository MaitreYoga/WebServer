
angular.module('ZenLounge').controller('RoomsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {

 $scope.getRooms = webcallservice.getRooms(function (data) {
        $scope.rooms = data;
        alert('ok');
    });
    
    	$scope.recherche ="";
        $scope.newroom=   new Object();

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
    $scope.CreateRoom = function() {
        webcallservice.CreateRoom($scope.newroom.name,function(data) {
            $scope.newroom="";
        })
    };
    $scope.isSearched = function(index) {
            if($scope.recherche=="" || $scope.rooms[index].name.indexOf($scope.recherche)>-1) {
                return 1 ;
            }
            else {
                return 0;
            }
    $scope.DeleteRoom = function(){
    
        })
    }
         
    };


	}]);