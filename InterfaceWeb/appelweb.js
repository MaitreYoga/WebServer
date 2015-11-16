/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('WebCall', []).
    service('webcallservice', ['$http', function ($http) {
        //api='https://zenlounge-restapi.herokuapp.com';
        api = 'http://localhost:8080/ZenLounge';

        this.login = function (login, mdp, success, error) {
            $http({
                url: api + '/login',
                method: "GET",
                params: {login: login, mdp : mdp}
            }).then(function successCallback(response) {
                success(response);
            }, function errorCallback(response) {
                error(response);

            });
        };

        this.userProfile = function (id,success,error) {
            $http({
                url: api + '/users',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){error(response)})
        }
        this.getProducts = function (callback) {
            $http.get(api + '/products').success(function (response) {callback(response); });
        };

        this.getProductCategories = function(callback) {
            $http.get(api + '/products/categories').success(function(response) {callback(response);})
        }
        this.getUsers = function (callback) {
            $http.get(api + '/users').success(function (response) {callback(response); });
        };
        
        this.getEvents = function (callback) {
            $http.get(api + '/events').success(function (response) {alert(response);callback(response); });
        };
		
		this.getActivityCategories = function(callback) {
            $http.get(api + '/activitycategories').success(function (response) {callback(response); });
		}
		
		this.addActivityCategories = function(name, callback) {
			$http({
                url: api + '/activitycategories',
                method: "POST",
                params: {name: name}
            }).success(function successCallback(response) {
                callback(response);
            });
		};
		this.addUser = function(user, callback) {
			$http({
                url: api + '/users',
                method: "POST",
                params: user
            }).success(function successCallback(response) {
                callback(response);
            });
		};
		
    }])
    .run(function($http,$cookies) {
        $http.defaults.headers.common.login = $cookies.getObject('loggedUser').login
        $http.defaults.headers.common.token = $cookies.getObject('loggedUser').connectiontoken;

    });