/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('UsersController', ['$scope', function($scope){
    $scope.getUsers = function () {
		$scope.users = [];
		$scope.users.push({firstname : "Joris"});
    }
}]);