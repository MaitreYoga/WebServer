/**
 * Created by lucasesteban on 19/11/15.
 */
angular.module('ZenLounge').controller('ownProductCtrl', ['$scope', 'webcallservice','$routeParams','$location','$cookies', function($scope,webcallservice,$params,loc,cookies){
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
        $scope.product= new Object();
        $scope.product.id="";
    };


    $scope.categories=[{name : "cc"},{name:"dd"}];
    $scope.brands=[{name : "zz"},{name:"aa"}];
    webcallservice.getProductCategories( function (response) {
        $scope.categories= response;
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
            alert("update")
            webcallservice.updateProduct($scope.product,
                function() {
                    alert("Product created");
                },
                function () {
                    alert("Error updating product")
                }
            );
        } else {
            $scope.product.idmember=cookies.getObject('loggedUser').idmember;
            alert(cookies.getObject('loggedUser').idmember)
            webcallservice.createProduct($scope.product,
                function(response) {
                    alert("Product created");
                }
            );
        }
    };
}]);