angular.module('routeApp', ['ngRoute']);
routeApp.config('$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/Home/Example1',
            controller: 'examplecontroller1'
        })
        .when('/Home/Example', {
            templateUrl: '/Home/Example',
            controller: 'examplecontroller'
        })
        .otherwise({
            redirectTo: '/'
        })
    //$locationProvider.html5Mode(true);
    //$locationProvider.html5Mode(true).hashPrefix('!');
});