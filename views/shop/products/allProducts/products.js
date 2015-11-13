/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProductsController', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    $scope.recherche ="";
    $scope.selectedCat="";
    $root.cart= cookies.getObject('cart');
    //cookies.remove('cart');
    //$scope.categories = webcallservice.getProductCategories();
    $scope.categories= ["chaussures","bando"];
    $scope.products = [
        {
            name:"chaussures adidas",
            brand:"adidas",
            price:10,
            quantityAvailable:2,
            memberPrice:8,
            productCat:"chaussures",
            seller:"toto",
            quantityWanted:0

        },
        {
            name:"chaussures nike",
            brand:"nike",
            price:20,
            quantityAvailable:12,
            memberPrice:15,
            productCat:"chaussures",
            seller:"titi",
            quantityWanted:0
        },
        {
            name:"bandeau nike",
            brand:"nike",
            price:20,
            quantityAvailable:12,
            memberPrice:15,
            productCat:"bando",
            seller:"titi",
            quantityWanted:0
        }
    ];

    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.products.length; i++){
            var product = $scope.products[i];
            total += (product.memberPrice * product.quantityWanted);
        }
        return total;
    };

    $scope.plusOne = function(index) {
        if ($scope.products[index].quantityAvailable>$scope.products[index].quantityWanted) {
            $scope.products[index].quantityWanted += 1;
        }

    };

    $scope.minusOne = function(index){
        if($scope.products[index].quantityWanted>0) {
            $scope.products[index].quantityWanted -= 1;
        }
    };

    $scope.isSearched = function(index) {
        if($scope.selectedCat=="" || $scope.selectedCat==$scope.products[index].productCat){
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
    /*$scope.getProducts = webcallservice.getProducts(function (data) {
		$scope.products = data;
	});*/
}]);