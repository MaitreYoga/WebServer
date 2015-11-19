/**
 * Created by jorismaillet on 06/11/15.
 */
angular.module('ZenLounge').controller('ProductController', ['$scope','webcallservice', '$routeParams', function ($scope, web, $routeParams  ) {
    web.getProduct($routeParams.id,function(response) {
                $scope.errorMessage = undefined;
                $scope.product = response;

    },
        function (response) {
            $scope.product = response;
            if (response === undefined || response === null) {
                $scope.errorMessage = "Error : the product N°" + $routeParams.id + " doesn't exist";
                $scope.product = undefined;
            }
        })

    }]);