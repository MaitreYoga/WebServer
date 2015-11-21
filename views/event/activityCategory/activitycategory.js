/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ActivityCategoriesController', ['$scope','webcallservice', function($scope, webcallservice){
    $scope.getActivityCategories = webcallservice.getActivityCategories(function(data) {
		$scope.activityCategories=data;
	});
	$scope.addActivityCategory = function() {
		webcallservice.addActivityCategories($scope.activityCategory,function(data) {
			$scope.activityCategories=data.catActs;
			$scope.newCatAct.name = "";
		})
	};

    $scope.delete= function(activityCat) {
        webcallservice.deleteActivityCategories(activityCat, function () {alert('ok')});
    }


}]);