/**
 * Created by lucasesteban on 19/11/15.
 */
angular.module('ZenLounge').controller('ownActCtrl', ['$scope', 'webcallservice','$routeParams','$location', function($scope,webcallservice,$params,loc){
    if($params.id!="new") {
        webcallservice.getActivity($params.id,
            function(response) {
                $scope.act=response;
            },
            function(response) {
                alert ("Erreur : " + response);
            }
        );
    } else {
        $scope.act={};
    };

    webcallservice.getActivityCategories( function(data) {
        $scope.actCats = data.catActs;
    });

    $scope.validate = function() {
        if($params.id!="new") {
            webcallservice.updateActivity($params.id,
                function() {
                    alert("Activity created");
                    loc.path("#/manageActivities");
                },
                function () {
                    alert("Error updating Activity")
                }
            );
        } else {
            webcallservice.createActivity($params.id,
                function() {
                    alert("Activity created");
                    loc.path("#/manageActivities");
                },
                function () {
                    alert("Error creating Activity")
                }
            );
        }
    };
}]);