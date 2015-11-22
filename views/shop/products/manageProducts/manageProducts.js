/**
 * Created by lucasesteban on 19/11/15.
 */

angular.module('ZenLounge').controller('ownProductsCtrl', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    $scope.user=cookies.getObject('loggedUser');
    $scope.compteur = 0;
    $scope.compter= function() {
        $scope.compteur += 1;
        if($scope.compteur==3) {
            jointure();
        }
    };

    webcallservice.getProducts(function (data) {
        $scope.products = [];
        $scope.test=data;
        var products = data;
        for (i=0;i<products.length;i++) {
            if($scope.user.idmember==products[i].idmember) {
                $scope.products.push(products[i]);
            }
        }
        $scope.compter();
     });

    $scope.delete= function (product) {
        webcallservice.deleteProduct(product, function() {
            alert("product deleted");
        });
    };
    webcallservice.getBrands( function (response) {
        $scope.brands=response.data;
        $scope.compter();
    });
    webcallservice.getProductCategories(function(response) {
        $scope.categories=response;
        $scope.compter();
    });
    var jointure = function() {
            for(i=0;i<$scope.products.length;i++) {
                for(j=0;j<$scope.categories.length;j++) {
                    if($scope.products[i].idcategory==$scope.categories[j].id) {
                        $scope.products[i].catName=$scope.categories[j].name;
                    }
                }
                for(k=0;k<$scope.brands.length;k++){
                    if($scope.products[i].idbrand==$scope.brands[k].id) {
                        $scope.products[i].brandName=$scope.brands[k].name;
                    }
                }
            }

    };
}]);