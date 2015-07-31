var app = angular.module("app", []);
app.config("$RouteProvider", [function ($RouteProvider) {
    $RouteProvider.when('/map/:country/:state/:city', { templateUrl: 'app.html', controller: 'appCtrl' })
}]);

app.controller("appCtrl", function ($scope, $routeParams) {
    $scope.message = {
        message: "Address" + $routeParams.country + "," + $routeParams.state + "," + $routeParams.city + ","
    };
});