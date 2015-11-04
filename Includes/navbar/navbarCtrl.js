/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('ZenLounge').controller('TestController', ['$scope', function($scope){
    $scope.bonjour="salut";
    $scope.connected=0;
    $scope.connect = function () {
        $scope.connected = 1;
    }
}]);