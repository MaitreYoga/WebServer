/**
 * Created by remytartiere on 21/11/15.
 */
angular.module('ZenLounge').controller('ProductCatsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
   
    $scope.getCats = webcallservice.getProductCategories(function (data) {
		$scope.productCats = data;
	});

	$scope.addProductCat = function () {
        $scope.cat.id = "";
        webcallservice.addProductCategories($scope.cat, function (data) {
            alert("ok");
			$scope.cat.name = "";
            $scope.cat.idparentcategory = "";
		})
	};

    $scope.delete = function (cat) {
        webcallservice.deleteProductCategories(cat.id, function () {alert('ok')});
    }
}]);
