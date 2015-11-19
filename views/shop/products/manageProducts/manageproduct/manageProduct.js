/**
 * Created by lucasesteban on 19/11/15.
 */
angular.module('ZenLounge').controller('ownProductCtrl', ['$scope', 'webcallservice','$routeParams','$location', function($scope,webcallservice,$params,loc){
    if($params.id!="new") {
        webcallservice.getProduct($params.id,
            function(response) {
                $scope.product=response;
            },
            function(response) {
                alert ("Erreur : " + response);
            }
        );
    } else {
        $scope.product={};
    };


    $scope.categories=[{name : "cc"},{name:"dd"}];
    $scope.brands=[{name : "zz"},{name:"aa"}];
    webcallservice.getProductCategories( function (response) {
        $scope.categories= response.data;
    });

    webcallservice.getBrands(
        function (response) {
        $scope.brands= response.data;
    },
        function(response) {
            alert("unable to get product brands");
        }
    );

    $scope.validate = function() {
        if($params.id!="new") {
            webcallservice.updateProduct($params.id,
                function() {
                    alert("Product created");
                    loc.path("#/manageProducts");
                },
                function () {
                    alert("Error updating product")
                }
            );
        } else {
            webcallservice.createProduct($params.id,
                function() {
                    alert("Product created");
                    loc.path("#/manageProducts");
                },
                function () {
                    alert("Error creating product")
                }
            );
        }
    };
}]);