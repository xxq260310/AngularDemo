angular.module("myListController", []).controller("myListFactoryCtrl", function ($scope, myFactory) {
    $scope.employees = {};
    myFactory.getLists().success(function (data) {
        $scope.employees = data;
    });
});

var myController = angular.module("myListController", []);
myController.controller("myListFactoryCtrl", function ($scope, myListService) {
    $scope.employees = {};
    myListService.getLists().success(function (data) {
        $scope.employees = data;
    });
});

var myDirectiveCtrl1 = angular.module("myDirectiveCtrl1", []);
myDirectiveCtrl1.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.loadData = function () {
        console.log("wait....loading");
    }
}]);

myDirectiveCtrl1.controller('MyCtrl2', ['$scope', function ($scope) {
    $scope.loadData2 = function () {
        console.log("loading.....wait");
    }
}]);

var myDirectiveCtrl2 = angular.module("myDirectiveCtrl2", []);
myDirectiveCtrl2.controller('compareCtrl', ["$scope", function ($scope) {
    $scope.description = "everyone!";
}]);

//transclude controller
var myTransCludeCtrl = angular.module("myTransCludeCtrl", []);
myTransCludeCtrl.controller("transcludeCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.name = 'aaaaaa';
    $scope.hideDialog = function () {
        $scope.dialogIsHidden = true;
        $timeout(function () {
            $scope.dialogIsHidden = false;
        }, 200)
    };
}]);

//Edit controller
var myEditCtrl = angular.module("myEditCtrl", []);
myEditCtrl.controller("EditController", ["$scope", "$http", "myEditService", "$route", function ($scope, $http, myEditService, $route) {
    $scope.countries = {};
    myEditService.getCountries().success(function (data) {
        $scope.countries = data;
    });

    $scope.country2states = {};
    $scope.States = function () {
        var country = $scope.Employee.Country;
        if (country) {
            myEditService.getStates(country).success(function (data) {
                $scope.country2states = data;
            });
        }
        else {
            $scope.country2states = null;
        }
    };

    if ($route.current.params.id) {
        $scope.id = $route.current.params.id;
        $scope.title = "Edit Employee";
        myEditService.getSingleList($scope.id).success(function (data) {
            $scope.Employee = {
                EmployeeId: $scope.id,
                FirstName: data.FirstName,
                LastName: data.LastName,
                Country: data.Country,
                State: data.State,
                IsActive: data.IsActive,
                Description: data.Description,
                BirthDate: data.BirthDate
            };
            $scope.States();
        }).error(function (data) {
            $scope.ErrorMessage = "An error has occured while getting edit list!" + data.ExceptionMessage;
        });
    }
    else {
        $scope.title = "Create New Employee";
    }

    $scope.save = function () {
        var userProfile = $scope.Employee;
        myEditService.save(userProfile).success(function () {
            window.location.href = "/#/UserProfiles/List";
        }).error(function (data) {
            console.log(data);
            $scope.ErrorMessage = "An error has occured while saving customer!" + data.ExceptionMessage;
        });
    };
}]);


//Delete Ctrl
var myDeleteCtrl = angular.module('myDeleteCtrl', []);
myDeleteCtrl.controller("DeleteController", ["$scope", "$http", "myEditService", "$route", "myDeleteService", function ($scope, $http, myEditService, $route, myDeleteService) {
    $scope.id = $route.current.params.id;
    myEditService.getSingleList($scope.id).success(function (data) {
        $scope.Employee = {
            EmployeeId: $scope.id,
            FirstName: data.FirstName,
            LastName: data.LastName,
            Country: data.Country,
            State: data.State,
            IsActive: data.IsActive,
            Description: data.Description,
            BirthDate: data.BirthDate
        };
    });
    $scope.delete = function () {
        myDeleteService.delete($scope.id).success(function () {
            window.location.href = "/#/UserProfiles/List";
        });
    }
}]);
