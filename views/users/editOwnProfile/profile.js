/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProfileController', ['$scope', 'webcallservice','$cookies','$rootScope',function($scope,webcallservice,$cookies,$root){
    $scope.user=$cookies.getObject('loggedUser');
}]);