angular.module('ZenLounge').controller('CreateAccessoriesController', ['$scope', 'webcallservice','$routeParams','$location', function($scope,webcallservice,$params,loc){
    if($params.id!="new") {
        webcallservice.getAccessory($params.id,
            function(response) {
                $scope.acc=response;
            },
            function(response) {
                alert ("Erreur : " + response);
            }
        );
    } else {
        $scope.acc={};
    };


  $scope.validate = function() {
        if($params.id!="new") {
            webcallservice.updateAccessory($params.id,
                function() {
                    alert("Accessory created");
                    loc.path("#/accessories");
                },
                function () {
                    alert("Error updating Accessory")
                }
            );
        } else {
            webcallservice.createAccessory($params.id,
                function() {
                    alert("Accessory created");
                    loc.path("#/accessories");
                },
                function () {
                    alert("Error creating Accessory")
                }
            );
        }
    };


	}]);