/**
 * Created by lucasesteban on 19/11/15.
 */
angular.module('ZenLounge').controller('NotifsCtrl', ['$scope', 'webcallservice','$cookies','$rootScope', function ($scope, webcallservice, cookies,$root) {

    /*webcallservice.getNotifs(function (data) {
     $scope.notifs = data;
     });*/
    $scope.notifs = [
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
    ];

    $scope.read = function (notif) {
        notif.isread=1;
        alert(notif.isread);
        /*webcallservice.readNotif(notif, function() {
            notif.isread=1;
        });*/
    }

    $scope.delete= function (notif) {
        $scope.notifs = $scope.notifs
            .filter(function (el) {
                return el.id !== notif.id;
            });
        /*webcallservice.deleteNotif(notif, function() {
            $scope.notifs.remove(notif);
        });*/
    }
    $scope.deleteAllNotifs= function () {
        webcallservice.deleteAllNotifs(function() {
            $scope.notifs= [];
        });
    }
}]);
