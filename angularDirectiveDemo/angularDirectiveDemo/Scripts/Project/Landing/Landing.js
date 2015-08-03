angular.module("MyAngular",
    ["ngRoute", "myListController", "myServiceModule", "myDirectiveModule", "myDirectiveCtrl1", "myDirectiveCtrl2", "myTransCludeCtrl", "myEditCtrl", "myDeleteCtrl", "scopeModule"])
    .config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/UserProfiles/List", { templateUrl: "/UserProfiles/List", controller: "myListFactoryCtrl" })
        .when("/UserProfiles/Edit/:id", { templateUrl: function (params) { return '/UserProfiles/Edit/' + params.id }, controller: "EditController" })
        .when("/UserProfiles/Delete/:id", { templateUrl: function (params) { return '/UserProfiles/Delete/' + params.id }, controller: "DeleteController" })
        .when("/UserProfiles/Details/:id", { templateUrl: "/UserProfiles/Details", controller: "myDetailsCtrl" })
            .when("/UserProfiles/Create", { templateUrl: "/UserProfiles/Create", controller: "EditController" })
            .when("/UserProfiles/ShareScope", { templateUrl: "/UserProfiles/ShareScope", controller: "ShareScopeController" })
            .when("/UserProfiles/IsolateScope", { templateUrl: "/UserProfiles/IsolateScope", controller: "IsolateScopeController" })
            .when("/UserProfiles/ShareOrIsaolateScope", { templateUrl: "/UserProfiles/CreateIsolateScopeInDirective", controller: "CreateIsolateScopeInDirectiveCtrl" })
            .when("/UserProfiles/PartialScope1", { templateUrl: "/UserProfiles/PartialScope1", controller: "PartialScope1Ctrl" })
            .when("/UserProfiles/PartialScope2", { templateUrl: "/UserProfiles/PartialScope2", controller: "PartialScope2Ctrl" })
            .when("/UserProfiles/PartialScope3", { templateUrl: "/UserProfiles/PartialScope3", controller: "PartialScope3Ctrl" })
        .otherwise({
            redirectTo: "/UserProfiles/List"
        })

        //$locationProvider.html5Mode(false);
        //$locationProvider.html5Mode(true).hashPrefix('!');
    }]);