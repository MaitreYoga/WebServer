angular.module('ZenLounge').controller('AccessoriesController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
 $scope.getAccessories = webcallservice.getAccessories(function (data) {
        $scope.accessories = data;
    });
    
        $scope.recherche ="";
   
    $scope.deleteAccessory = function(accessory) {
        webcallservice.deleteAccessory(accessory, function() {
            alert("accessory Deleted");
        })
    };
    $scope.isSearched = function(index) {
            if($scope.recherche=="" || $scope.accessories[index].name.indexOf($scope.recherche)>-1) {
                return 1 ;
            }
            else {
                return 0;
            }
         
    };


    }]);