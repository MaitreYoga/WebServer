/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('WebCall',[]).
    service('webcallservice', ['$http', function($http) {

        this.getUsers =function (callback){
            $http.get('http://localhost:8080/ZenLounge/HelloWorld').success(function(response){callback(response)});
    }

    }]);