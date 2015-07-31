//angular.module("myListController", []).controller("myListFactoryCtrl", function ($scope, myFactory) {
//    $scope.employees = {};
//    myFactory.getLists().success(function (data) {
//        $scope.employees = data;
//    });
//});

angular.module("myListController", []).controller("myListFactoryCtrl", function ($scope, myService) {
    $scope.employees = {};
    myService.getLists().success(function (data) {
        $scope.employees = data;
    });
});

