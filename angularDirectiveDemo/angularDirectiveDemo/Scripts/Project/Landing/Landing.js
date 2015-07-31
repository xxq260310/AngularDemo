angular.module("MyAngular",
    ["ngRoute", "myListController", "myServiceModule", "myDirectiveModule", "myDirectiveCtrl1", "myDirectiveCtrl2", "myTransCludeCtrl", "myEditCtrl", "myDeleteCtrl"])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when("/UserProfiles/List", { templateUrl: "/UserProfiles/List", controller: "myListFactoryCtrl" })
    .when("/UserProfiles/Edit/:id", { templateUrl: function (params) { return '/UserProfiles/Edit/' + params.id}, controller: "EditController" })
    .when("/UserProfiles/Delete/:id", { templateUrl: function (params) { return '/UserProfiles/Delete/' + params.id }, controller: "DeleteController" })
    .when("/UserProfiles/Details/:id", { templateUrl: "/UserProfiles/Details", controller: "myDetailsCtrl" })
        .when("/UserProfiles/Create", { templateUrl: "/UserProfiles/Create", controller: "EditController" })
    .otherwise({
        redirectTo: "/UserProfiles/List"
    })

    //$locationProvider.html5Mode(false);
    //$locationProvider.html5Mode(true).hashPrefix('!');
}]);