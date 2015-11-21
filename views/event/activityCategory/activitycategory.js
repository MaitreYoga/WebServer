/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ActivityCategoriesController', ['$scope','webcallservice', function($scope, webcallservice){
    $scope.getActivityCategories = webcallservice.getActivityCategories(function(data) {
		$scope.activityCategories=data;
	});

	$scope.addActivityCategory = function() {
        $scope.activityCategory.id="";
        webcallservice.addActivityCategories($scope.activityCategory,function(data) {
            alert("ok");
			$scope.activityCategory.name = "";
		})
	};

    $scope.delete= function(activityCat) {
        webcallservice.deleteActivityCategories(activityCat.id, function () {alert('ok')});
    }


}]);