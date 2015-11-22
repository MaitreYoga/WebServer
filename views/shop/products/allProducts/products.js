/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProductsController', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    $scope.compteur=0;
    $scope.recherche ="";
    $scope.selectedCat="";
    $root.cart= cookies.getObject('cart');
    //cookies.remove('cart');
    $scope.getProducts = webcallservice.getProducts(function (data) {
        $scope.products = data;
        jointure();
    });
    webcallservice.getProductCategories(function(data) {$scope.categories=data;jointure();});
    webcallservice.getBrands(function(response) {$scope.brands=response.data;jointure();});

    var jointure = function() {
        $scope.compteur+=1;
        if($scope.compteur==3) {
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
        }
    };

    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.products.length; i++){
            var product = $scope.products[i];
            total += (product.memberPrice * product.quantityWanted);
        }
        return total;
    };

    $scope.plusOne = function(index) {
        if($scope.products[index].quantityWanted==undefined) {
            $scope.products[index].quantityWanted = 1;
        }else if ($scope.products[index].quantityavailable>$scope.products[index].quantityWanted) {
            $scope.products[index].quantityWanted += 1;
        }

    };

    $scope.minusOne = function(index){
        if($scope.products[index].quantityWanted>0) {
            $scope.products[index].quantityWanted -= 1;
        }
    };

    $scope.isSearched = function(index) {
        if($scope.selectedCat=="" || $scope.selectedCat==$scope.products[index].idcategory){
            if($scope.recherche=="" || $scope.products[index].name.indexOf($scope.recherche)>-1) {
                return 1 ;
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    };

    $scope.addToCart = function(index){
        if (typeof $root.cart == 'undefined') {
            if(typeof cookies.getObject('cart') !== 'undefined') {
                $root.cart = cookies.getObject('cart');
            }
            else {
                $root.cart = []
            }
        }
        $root.cart.push($scope.products[index]);
        cookies.putObject('cart',$root.cart)
    };
}]);