/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProfileController', ['$scope', 'webcallservice','$cookies', function($scope,webcallservice,$cookies){
    $scope.user = $scope.loggedUser;
}]);