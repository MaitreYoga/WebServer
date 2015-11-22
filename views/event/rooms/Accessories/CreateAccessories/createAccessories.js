
angular.module('ZenLounge').controller('CreateAccessoriesController', ['$scope', 'webcallservice', function ($scope, webcallservice) {

        $scope.recherche ="";
        $scope.newaccess=   new Object();

    $scope.createAccessory = function() {
        $scope.newaccess.id="";
        webcallservice.createAccessory($scope.newaccess,function(data) {
            $scope.newaccess="";
        })
    };



    }]);