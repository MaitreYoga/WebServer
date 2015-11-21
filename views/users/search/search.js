/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('SearchController', ['$scope','webcallservice', function($scope, webcallservice){
    webcallservice.getUsers(function(data) {
        $scope.users=data;
    });

    $scope.id="";
    $scope.name="";

    $scope.isSearched = function(user) {
        return (isSearchedByName(user) || isSearchedById(user))
    };
    var isSearchedByName = function(user) {
        if($scope.name=="") {
            return 0;
        } else {
            return ((user.lastname+user.firstname).toLowerCase().indexOf($scope.name.toLowerCase())>-1);
        }
    };
    var isSearchedById = function(user) {
      if($scope.id=="") {
          return 0
      } else {
          return user.id==$scope.id;
      }
    };
}]);