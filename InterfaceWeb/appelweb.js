/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('WebCall',[]).
    service('webcallservice', ['$http', function($http) {
        //api='https://zenlounge-restapi.herokuapp.com';
        api='http://localhost:8080/ZenLounge'
        this.getUsers =function (callback){
            $http.get(api+'/Users').success(function(response){callback(response)});
    }


    }]);