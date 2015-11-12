/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('ZenLounge').controller('TestController', ['$scope','webcallservice','$cookies','$rootScope', function($scope, webcallservice,$cookies,$root){
    $root.user=$cookies.getObject('user');
}]);