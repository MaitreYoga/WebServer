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
        .when('/users/:id',
        {
            templateUrl: 'views/users/profile/profile.html'
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
