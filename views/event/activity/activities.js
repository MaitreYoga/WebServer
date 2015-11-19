/**
 * Created by lucasesteban on 19/11/15.
 */
angular.module('ZenLounge').controller('ownActivitiesController', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    webcallservice.getActivities(function (response) {
        $scope.acts = response.activities;

     });

    $scope.delete= function (product) {
        $scope.acts = $scope.acts
            .filter(function (el) {
                return el.name !== product.name;
            });
        /*webcallservice.deleteProduct(product, function() {
         $scope.products = $scope.products
         .filter(function (el) {
         return el.name !== product.name;
         });
            alert("Activité supprimée");
         });*/
    };

}]);