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
        .otherwise({redirectTo: '/'});
	})
    .directive('navBar', function() {
        return {
            restrict : 'E',
            templateUrl: 'views/common/navbar/navbar.html'
        };
    });
