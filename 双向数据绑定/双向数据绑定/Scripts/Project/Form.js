var userInfoModule = angular.module("UserInfoModule", []);

userInfoModule.controller("UserInfoCtrl", ["$scope", function ($scope) {
    $scope.userInfo = {
        email: "1032978743@qq.com",
        password: "1111111",
        autologin: true
    };

    $scope.getFormData = function () {
        console.log($scope.userInfo);
    };

    $scope.setFormData = function () {
        $scope.userInfo = {
            email: "11111@163.com",
            password: "11111111",
            autologin: false
        };
    };

    $scope.resetForm = function () {
        $scope.userInfo = {
            email: "1032978743@qq.com",
            password: "1111111",
            autologin: true
        };
    };
}]);