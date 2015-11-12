angular.module('ZenLounge', ['ngRoute','WebCall','ngCookies'])

    .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/common/home.html'
        })
        .when('/signUp',
        {
            templateUrl: 'views/common/SignUp.html'
        })
        .when('/users',
        {
            templateUrl: 'views/users/allUsers/users.html'
        })
        .when('/profile',
        {
            templateUrl: 'views/users/profile/user_info.html'
        })
        .when('/products',
        {
            templateUrl: 'views/shop/products/allProducts/products.html'
        })
        .when('/products/:id',
        {
            templateUrl: 'views/shop/products/product/product.html'
        })
        .when('/events',
        {
            templateUrl: 'views/event/events/allEvents/events.html'
        })
        .when('/events/:id',
        {
            templateUrl: 'views/event/events/event/event.html'
        })
        .when('/activitycategories',
        {
            templateUrl: 'views/event/activityCategory/activitycategory.html'
        })
		
        .otherwise({redirectTo: '/'});
	})
    .directive('navBar', function() {
        return {
            restrict : 'E',
            templateUrl: 'views/common/navbar/navbar.html'
        };
    })
    .directive('login', function() {
        return {
            restrict : 'E',
            templateUrl: 'views/users/login/login.html'
        };
    });
