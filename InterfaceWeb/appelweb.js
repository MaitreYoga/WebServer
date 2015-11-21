/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('WebCall', []).
    service('webcallservice', ['$http', function ($http) {
        
        //api = 'http://localhost:8080/ZenLounge';
        //api = 'https://zenlounge-api.herokuapp.com';
        api = 'https://zenlounge-api-preprod.herokuapp.com';

        //users
        this.login = function (login, mdp, success, error) {
            $http({
                url: api + '/users/login',
                method: "GET",
                params: {login: login, mdp : mdp}
            }).then(function successCallback(response) {
                success(response);
            }, function errorCallback(response) {
                error(response);

            });
        };

        this.addUser = function(user, callback) {
            $http({
                url: api + '/users',
                method: "POST",
                data: user
            }).success(function successCallback(response) {
                callback(response);
            });
        };

        this.userProfile = function (id,success,error) {
            $http({
                url: api + '/users/'+id,
                method: "GET"
            }).then(function(response){success(response)},function(response){error(response)})
        };

        this.getUsers = function (callback) {
            alert("getusers");
            $http.get(api + '/users').success(function (response) {callback(response); });
        };

    //shop
        //products
        this.getProducts = function (callback) {
            $http.get(api + '/products').success(function (response) {callback(response); });
        };

        this.getProduct = function (id,success,error) {
            $http({
                url: api + '/products',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){error(response)})
        };

        this.updateProduct =function() {};

        this.createProduct = function() {};

        this.getOwnProducts = function (success,error) {
            $http({
                url: api + '/products',
                method: "GET"
            }).then(function(response){success(response)},function(response){})
        };

        this.getProductCategories = function(callback) {
            $http.get(api + '/productcategories').success(function(response) {callback(response);})
        };

        this.getBrands = function (success,error) {
            $http({
                url: api + '/brands',
                method: "GET"
            }).then(function(response){success(response)},function(response){error(response)})
        };

    //events
        this.getEvents = function (callback) {
            $http.get(api + '/events').success(function (response) {callback(response); });
        };
		
		this.getEvent = function (id,success,error) {
            $http({
                url: api + '/events',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){error(response)})
        };

        this.getPeriods = function (success,error) {
            $http({
                url: api + '/periods',
                method: "GET"
            }).then(function(response){success(response)},function(response){error(response)})
        };

		this.getRegistrations = function (callback) {
            $http.get(api + '/registrations').success(function (response) {callback(response); });
        };
		
		this.getRepetitives = function (callback) {
            $http.get(api + '/repetitives').success(function (response) {callback(response); });
        };
		
        this.getRooms = function (callback) {
            $http.get(api + '/rooms').success(function (response) {callback(response); });
        };
        
		this.getActivities = function (callback) {
            $http.get(api + '/activities').success(function (response) {callback(response); });
        };

        this.createActivity = function () {};

        this.updateActivity = function() {};

        this.getActivity = function (id,success) {
            $http({
                url: api + '/activites',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){})
        };
		
		this.getActivityCategories = function(callback) {
            $http({
                url: api + '/activitycategories',
                method: "GET"
            }).success(function success(response) {
                callback(response);
            });
		};
		
		this.addActivityCategories = function(name, callback) {
			$http({
                url: api + '/activitycategories',
                method: "POST",
                data: name
            }).success(function successCallback(response) {
                callback(response);
            });
		};

        this.deleteActivityCategories = function(activityCat, callback) {
            $http({
                url: api + '/activitycategories/'+activityCat,
                method: "DELETE"
            }).success(function successCallback(response) {
                callback(response);
            });
        };
		
		this.getRooms = function (callback) {
            $http.get(api + '/rooms').success(function (response) {callback(response); });
        };
		
		this.getSpeakers = function (callback) {
            $http.get(api + '/speakers').success(function (response) {callback(response); });
        };

        //Notifications
        this.getNotifs = function(callback) {
            $http({
                url : api+'/notifications',
                method:"GET"
            }).success(function success(response){callback(response)});
        }
        this.readNotif = function(notif) {
            $http({
                url : api + '/notifications',
                method :"PUT",
                params : notif
            });
        }
        this.deleteNotif = function(notif) {
            $http({
                url : api+'/notifications',
                method:'DELETE',
                params : notif
            });
        }
        this.deleteAllNotifs= function(callback){
            $http({
                url : api+'/notifications',
                method :'DELETE'
            }).success(function(response){callback} )
        }
    }])
    .run(function($http,$cookies) {
        if ($cookies.getObject('loggedUser') !== undefined) {
           // $http.defaults.headers.Access-Control-Allow-Origin="*";
            $http.defaults.headers.Authorization = $cookies.getObject('loggedUser').login+$cookies.getObject('loggedUser').connectiontoken;
           // $http.defaults.headers.common.token = $cookies.getObject('loggedUser').connectiontoken;
        }
    });