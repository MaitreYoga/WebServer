angular.module('ZenLounge', ['ngRoute','WebCall'])

    .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/common/home.html'
        })
        .when('/signUp',
        {
            templateUrl: 'views/SignUp.html'
        })
        .when('/users',
        {
            templateUrl: 'views/users/users.html'
        })
        .when('/users/:id',
        {
            templateUrl: 'views/profile/profile.html'
        })
        .otherwise({redirectTo: '/'});
	})
    .directive('navBar', function() {
        return {
            restrict : 'E',
            templateUrl: 'views/common/navbar/navbar.html'
        };
    });
