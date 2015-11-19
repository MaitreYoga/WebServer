/**
 * Created by lucasesteban on 19/11/15.
 */

angular.module('ZenLounge').controller('ownProductsCtrl', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    /*webcallservice.getOwnProdcuts(function (data) {
     $scope.products = data;
     });*/

    $scope.products = [
        {
            id :"1",
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
            id :"2",
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
            id :"3",
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


    $scope.delete= function (product) {
        $scope.products = $scope.products
            .filter(function (el) {
                return el.name !== product.name;
            });
        /*webcallservice.deleteProduct(product, function() {
         //$scope.notifs.remove(product);
         });*/
    }

}]);