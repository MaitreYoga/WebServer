/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProductsController', ['$scope', 'webcallservice', function ($scope, webcallservice) {
    $scope.getProducts = webcallservice.getProducts(function (data) {
		$scope.products = data;
	});
}]);