/**
 * Created by lucasesteban on 19/11/15.
 */
angular.module('ZenLounge').controller('notifsCtrl', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    $scope.user = cookies.getObject('loggedUser');

    webcallservice.getNotifs($scope.user.id,function (data) {
     $scope.notifs = data;
     });

  /*  $scope.notifs = [
        {
            id : "1",
            label:"chaussures adidas",
            isread :"0"
        },
        {
            id : "2",
            label:"chaussures nike",
            isread :"0"
        }
    ];*/

    $scope.read = function (notif) {
        notif.isread=1;
        webcallservice.readNotif(notif, function() {
            notif.isread=1;
        });
    };

    $scope.delete= function (notif) {
        webcallservice.deleteNotif(notif.id, function() {
            $alert("supprimé");
        });
    };
    $scope.deleteAllNotifs= function () {
        for(i=0;i<$scope.notifs.length;i++) {
            webcallservice.deleteNotif($scope.notifs[i].id)
        };
    }
}]);
