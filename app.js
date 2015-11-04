angular.module('ZenLounge', ['ngRoute'])

    .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'UsesCases/test.html'
        })
        .when('/test',
        {
            templateUrl: 'UsesCases/test2.html'
        })
        .otherwise({redirectTo: 'test'});
})
    .controller('UserController', function($http, $scope){
    $scope.result = "1";
    this.HelloWorld = function()
    {
        $http.get('http://localhost:8080/ZenLounge/HelloWorld').success(function(response){alert(response+"\n"+response.data+"\n"+response.status+"\n"+response.headers); $scope.result = response.data});
    };
})
    .directive('navBar', function() {
        return {
            restrict : 'E',
            templateUrl: 'Includes/navbar/navbar.html'
        };
    });
