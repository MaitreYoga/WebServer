/**
 * Created by remytartiere on 21/11/15.
 */
angular.module('ZenLounge').controller('ProductCatsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
   
    $scope.getCats = webcallservice.getProductCategories(function (data) {
		$scope.productCats = data;
	});

	$scope.addProductCat = function () {
        $scope.catadd.id = "";
        webcallservice.addProductCategories($scope.catadd, function (data) {
            alert("ok");
			$scope.catadd.name = "";
            $scope.catadd.idparentcategory = "";
		})
	};

    $scope.delete = function (cat) {
        webcallservice.deleteProductCategories(cat.id, function () {alert('ok')});
    }
}]);
