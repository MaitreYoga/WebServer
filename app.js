angular.module('ZenLounge', ['ngRoute','WebCall'])

    .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/signUp',
        {
            templateUrl: 'views/SignUp.html'
        })
        .otherwise({redirectTo: '/'});
})
    .controller('UserController', function($http, $scope, webcallservice){
    $scope.result = "1";
    this.HelloWorld = function()
    {
        webcallservice.getUsers(function(data) {$scope.data=data;alert($scope.data)});
      //  $http.get('http://localhost:8080/ZenLounge/HelloWorld').success(function(response){alert(response+"\n"+response.data+"\n"+response.status+"\n"+response.headers); $scope.result = response.data});
    };
})
    .directive('navBar', function() {
        return {
            restrict : 'E',
            templateUrl: 'Includes/navbar/navbar.html'
        };
    });
