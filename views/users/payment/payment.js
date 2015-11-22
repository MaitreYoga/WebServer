/**
 * Created by camilledelm on 22/11/15.
 */
angular.module('ZenLounge').controller('PaymentController', ['$scope', 'webcallservice','$cookies','$rootScope',function($scope,webcallservice,$cookies,$root){
    $scope.user=$cookies.getObject('loggedUser');
}]);