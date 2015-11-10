/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('WebCall',[]).
    service('webcallservice', ['$http', function($http) {
        //api='https://zenlounge-restapi.herokuapp.com';
        api='http://localhost:8080/ZenLounge'

        this.login = function(login, mdp,success,error) {
            $http({
                url: api+'/login',
                method: "GET",
                params: {login: login, mdp : mdp}
            }).then(function successCallback(response) {
                success(response);
            }, function errorCallback(response) {
                error(response);
            });
        };
        this.getUsers =function (callback){
            $http.get(api+'/Users').success(function(response){callback(response)});
		}
    }]);