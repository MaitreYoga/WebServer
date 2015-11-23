/**
 * Created by lucasesteban on 04/11/15.
 */
angular.module('WebCall', []).
    service('webcallservice', ['$http', function ($http) {
        
        //api = 'http://localhost:8080/ZenLounge';
        //api = 'https://zenlounge-api.herokuapp.com';
        //api = 'https://zenlounge-api.herokuapp.com';
        api = 'https://zenlounge-api.herokuapp.com';

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


        this.updateUser = function(user, callback) {
            $http({
                url: api + '/users',
                method: "PUT",
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

        this.createProduct = function(product,callback) {
            $http({
                url: api + '/products',
                method: "POST",
                data: product
            }).success(function () {
                callback();
            });
        };
        this.deleteProduct = function(product,callback) {
            $http({
                url: api + '/products/'+product.id,
                method: "DELETE"
            })
                .success(function () {
                callback();
            });
        };

        this.getOwnProducts = function (success,error) {
            $http({
                url: api + '/products',
                method: "GET"
            }).then(function(response){success(response)},function(response){})
        };

        this.getProductCategories = function(callback) {
            $http.get(api + '/productcategories').success(function(response) {callback(response);})
        };
		
		this.addProductCategories = function(catadd, callback) {
			$http({
                url: api + '/productcategories',
                method: "POST",
                data: catadd
            }).success(function successCallback(response) {
                callback(response);
            });
		};

        this.deleteProductCategories = function(cat, callback) {
            $http({
                url: api + '/productcategories/'+cat,
                method: "DELETE"
            }).success(function successCallback(response) {
                callback(response);
            });
        };
        
        this.getBrands = function (success,error) {
            $http({
                url: api + '/brands',
                method: "GET"
            }).then(function(response){success(response)},function(response){error(response)})
        };
		
		this.addProductBrands = function(name, callback) {
			$http({
                url: api + '/brands',
                method: "POST",
                data: name
            }).success(function successCallback(response) {
                callback(response);
            });
		};

        this.deleteProductBrands = function(brand, callback) {
            $http({
                url: api + '/brands/'+brand,
                method: "DELETE"
            }).success(function successCallback(response) {
                callback(response);
            });
        };

    //events
        this.getEvents = function (callback) {
            $http.get(api + '/events').success(function (response) {callback(response); });
        };

        this.getRegistrations = function(callback) {
            $http.get(api + '/inscriptions').success(function (response) {callback(response); });
        }

		this.getEvent = function (id,success,error) {
            $http({
                url: api + '/events',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){error(response)})
        };

        this.register = function(registration,callback) {
            $http({
                url: api + '/inscriptions',
                method: "POST",
                data : registration
            }).then(function(response){callback()},function(response){alert('error registrering'+response)})
        };

        this.getPeriods = function (success,error) {
            $http({
                url: api + '/periods',
                method: "GET"
            }).then(function(response){success(response)},function(response){error(response)})
        };

		
		this.getRepetitives = function (callback) {
            $http.get(api + '/repetitives').success(function (response) {callback(response); });
        };
		
        this.getRooms = function (callback) {
            $http.get(api + '/rooms').success(function (response) {callback(response); });
        };
        this.getRoom = function (id,success,error) {
            $http({
                url: api + '/rooms',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){error(response)})
        }
        
    
        
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
		
		this.createEvent = function(event, callback) {
			$http({
                url: api + '/events',
                method: "POST",
                data: event
            }).success(function successCallback(response) {
                callback(response);
            });
		};
		
		// Rooms

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
		
        this.CreateRoom = function(room,callback) {
            $http({
                url: api + '/rooms',
                method: "POST",
                data: room
            }).success(function successCallback(response) {
                callback(response);
            });

        };
        this.deleteRoom = function(room) {
            $http({
                url : api+'/rooms/'+room.id,
                method:'DELETE'
            }).success(function() {alert("ok")});
        };
        // Accessories
            this.getAccessories = function (callback) {
            $http.get(api + '/accessories').success(function (response) {callback(response); });
        };

        this.createAccessory = function(callback){
              $http({
                url: api + '/accessories',
                method: "POST",
                data: accessory
            }).success(function successCallback(response) {
                callback(response);
            });
        };
         this.deleteAccessory = function(accessory) {
            $http({
                url : api+'/accessories/'+accessory.id,
                method:'DELETE'
               }).success(function() {alert("ok")});
         
        };
        this.getAccessory = function (id,success) {
            $http({
                url: api + '/accessories',
                method: "GET",
                params: {id: id}
            }).then(function(response){success(response)},function(response){})
        };
          this.updateAccessory = function() {};

		this.getSpeakers = function (callback) {
			$http.get(api + '/speakers').success(function (response) {callback(response); });
        };

        //Notifications
        this.getNotifs = function(id,callback) {
            $http({
                url : api+'/users/'+id+'/notifications',
                method:"GET"
            }).success(function success(response){callback(response)});
        }
        this.readNotif = function(notif) {
            $http({
                url : api + '/notifications/'+notif.id+'/read',
                method :"GET"
            });
        }
        this.deleteNotif = function(notif,callback) {
            $http({
                url : api+'/notifications/'+notif,
                method:'DELETE'
            }).then(callback,function(){});
        };
    }])
    .run(function($http,$cookies) {
        if ($cookies.getObject('loggedUser')) {
            $http.defaults.headers.common.Authorization = $cookies.getObject('loggedUser').connectiontoken;
           // $http.defaults.headers.common.token = $cookies.getObject('loggedUser').connectiontoken;
        }
    });