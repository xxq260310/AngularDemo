angular.module("MyAngularMVCApp", ["ngRoute", "myListController", "myServiceModule"]).config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/Home/Index", { templateUrl: "Home/Index.cshtml", controller: "myListFactoryCtrl" })
    .when("/Home/Edit/:id", { templateUrl: "Home/Edit.cshtml", controller: "myListFactoryCtrl" })
    .when("/Home/Delete/:id", { templateUrl: "Home/Delete.cshtml", controller: "myListFactoryCtrl" })
    .when("/Home/Details/:id", { templateUrl: "Home/Details.cshtml", controller: "myListFactoryCtrl" })
        .when("/", { templateUrl: "Home/Index.cshtml", controller: "myListFactoryCtrl" })
    .otherwise({
        redirectTo: "/Home/Index"
    })
}]);