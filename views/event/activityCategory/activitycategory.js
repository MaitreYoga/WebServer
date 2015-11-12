/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ActivityCategoriesController', ['$scope','webcallservice', function($scope, webcallservice){
    $scope.getActivityCategories = webcallservice.getActivityCategories(function(data) {
		$scope.activityCategories=data.catActs;
	});
	$scope.newCatAct = new Object();
	$scope.addActivityCategory = function() {
		webcallservice.addActivityCategories($scope.newCatAct.name,function(data) {
			$scope.activityCategories=data.catActs;
			$scope.newCatAct.name = "";
		})
	};
}]);