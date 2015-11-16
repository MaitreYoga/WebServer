/**
 * Created by lucasesteban on 16/11/15.
 */
angular.module('ZenLounge').controller('viewProfile', ['$scope', 'webcallservice','$cookies','$routeParams', function($scope,webcallservice,$cookies,$params){
    $scope.getUser = webcallservice.userProfile($params.id,
        function(response) {
            $scope.user=response.data;
        },
        function(response) {
            alert ("Erreur : " + response);
        }
    );
}]);