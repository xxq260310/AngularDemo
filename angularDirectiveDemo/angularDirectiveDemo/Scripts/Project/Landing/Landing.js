angular.module("MyAngular",
    ["ngRoute", "myListController", "myServiceModule", "myDirectiveModule", "myDirectiveCtrl1", "myDirectiveCtrl2", "myEditCtrl", "myDeleteCtrl", "filterCtrlModule",
        "myDetailsCtrl", "myTransCludeCtrl", "limitToExample", "orderByExample", "selectExample", "equalExample", "extendExample", "foreachExample", "fromjsonExample", "tojsonExample", "identityExample"
    , "isArrayExample"])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/UserProfiles/List", { templateUrl: "/UserProfiles/List", controller: "myListFactoryCtrl" })
        .when("/UserProfiles/Edit/:id", { templateUrl: function (params) { return '/UserProfiles/Edit/' + params.id }, controller: "EditController" })
        .when("/UserProfiles/Delete/:id", { templateUrl: function (params) { return '/UserProfiles/Delete/' + params.id }, controller: "DeleteController" })
        .when("/UserProfiles/Details/:id", { templateUrl: function (params) { return '/UserProfiles/Details/' + params.id }, controller: "DetailsController" })
            .when("/UserProfiles/Create", { templateUrl: "/UserProfiles/Create", controller: "EditController" })
            .when("/Test/directive1", { templateUrl: "/Test/directive1" })
            .when("/Test/directive2", { templateUrl: "/Test/directive2" })
            .when("/Test/directive3", { templateUrl: "/Test/directive3" })
            .when("/Test/directive4", { templateUrl: "/Test/directive4" })
            .when("/Test/templateUrl", { templateUrl: "/Test/templateUrl" })
            .when("/Test/Test", { templateUrl: "/Test/Test" })
        .otherwise({
            redirectTo: "/UserProfiles/List"
        });

        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requiredBase: false
        //});
        //$locationProvider.html5Mode(true);
        //$locationProvider.html5Mode(true).hashPrefix('!');
    }]);