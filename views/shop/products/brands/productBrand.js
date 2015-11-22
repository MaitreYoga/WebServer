/**
 * Created by remytartiere on 21/11/15.
 */
angular.module('ZenLounge').controller('ProductBrandsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
    $scope.getBrands = webcallservice.getBrands(function (data) {
		$scope.productBrands = data.data;
	});

	$scope.addProductBrand = function () {
        $scope.brand.id = "";
        webcallservice.addProductBrands($scope.brand, function (data) {
            alert("ok");
			$scope.brand.name = "";
		})
	};

    $scope.delete = function (brand) {
        webcallservice.deleteProductBrands(brand.id, function () {alert('ok')});
    }
}]);
