/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('ZenLounge').controller('TestController', ['$scope','webcallservice', function($scope, webcallservice,cookie){
    $scope.login = function(login,mdp) {
        webcallservice.login(login, mdp,
            function (response) {
                $scope.test=response;
                alert(response);
            },
            function (response) {
                alert('connection failed' + response);
                redirectTo('/')
            });
    }
}]);