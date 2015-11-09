/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('ZenLounge').controller('TestController', ['$scope','webcallservice','$cookies', function($scope, webcallservice,$cookies){
    $scope.login = function(login,mdp) {
        webcallservice.login(login, mdp,
            function (response) {
                $scope.test=response;
                alert(response.data.firstName);
                $cookies.put('userID',response.data.firstName);
                $cookies.putObject('user',response.data);
                alert($cookies.get('user'));
                alert($cookies.get('userID'));

            },
            function (response) {
                alert('connection failed' + response);
                redirectTo('/')
            });
    }
}]);