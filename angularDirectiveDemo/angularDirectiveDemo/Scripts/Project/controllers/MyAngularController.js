//angular.module("myListController", []).controller("myListFactoryCtrl", function ($scope, myFactory) {
//    $scope.employees = {};
//    myFactory.getLists().success(function (data) {
//        $scope.employees = data;
//    });
//});

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
    $scope.hideDialog = function () {
        $scope.dialogIsHidden = true;
        $timeout(function () {
            $scope.dialogIsHidden = false;
        }, 1000)
    };
}]);

angular.module("isolatescope1", []).controller("isolatescopectrl1", function ($scope) {
    $scope.value = "hello world";
    $scope.definition = "&符号的使用";
    $scope.click = function () {
        $scope.value = Math.random();
    };
});

angular.module("isolatescope2", []).controller("isolatescopectrl2", function ($scope) {
    $scope.name = "Say: hello world";
    $scope.definition = "@符号的使用";
});

angular.module("isolatescope3", []).controller("isolatescopectrl3", function ($scope) {
    $scope.user = {
        name: '',
        id: 1
    };
    $scope.definition = "=符号的使用";
});


//Edit controller
var myEditCtrl = angular.module("myEditCtrl", []);
myEditCtrl.controller("EditController", ["$scope", "myEditService", "$route", function ($scope, myEditService, $route) {
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

    //$routeParams.id;
    if ($route.current.params.id) {
        $scope.id = $route.current.params.id;
        $scope.title = "Edit Employee";
        myEditService.getSingleList($scope.id).success(function (data) {
            $scope.Employee = {
                FirstName: data.FirstName,
                LastName: data.LastName,
                Country: data.Country,
                State: data.State,
                IsActive: data.IsActive,
                Description: data.Description,
                BirthDate: new Date(data.BirthDate),
                EmployeeId: data.EmployeeId
            };
            $scope.States();
            $scope.master = angular.copy($scope.Employee);
        }).error(function (data) {
            $scope.ErrorMessage = "An error has occured while getting edit list!" + data.ExceptionMessage;
        });
    }
    else {
        $scope.title = "Create New Employee";
    }

    $scope.reset = function () {
        $scope.Employee = angular.copy($scope.master);
    };

    $scope.save = function () {
        var userProfile = {
            EmployeeId: $scope.Employee.EmployeeId,
            FirstName: $scope.Employee.FirstName,
            LastName: $scope.Employee.LastName,
            Country: $scope.Employee.Country,
            State: $scope.Employee.State,
            IsActive: $scope.Employee.IsActive,
            Description: $scope.Employee.Description,
            BirthDate: new Date($scope.Employee.BirthDate),
        };
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
myDeleteCtrl.controller("DeleteController", ["$scope", "myEditService", "$route", "myDeleteService", function ($scope, myEditService, $route, myDeleteService) {
    $scope.id = $route.current.params.id;
    myEditService.getSingleList($scope.id).success(function (data) {
        $scope.Employee = data;
    }).error(function (data) {
        $scope.ErrorMessage = "An error has occured while deleting customer!" + data.ExceptionMessage;
    });
    $scope.delete = function () {
        myDeleteService.delete($scope.id).success(function () {
            window.location.href = "/#/UserProfiles/List";
        });
    }
}]);

////share directive
//var scopeCtrl = angular.module("scopeModule", []);
//scopeCtrl.controller("ShareScopeController", function ($scope) {
//    $scope.name = "hello world";
//}).directive("shareDirective", function () {
//    return {
//        restrict: 'EA',
//        replace: false,
//        template: 'Say:{{name}}'
//    }
//});

////isolate Directive
//scopeCtrl.controller("IsolateScopeController", function ($scope) {
//    $scope.name = "hello world";
//}).directive("isolateDirective", function () {
//    return {
//        restrict: 'EA',
//        scope: {},
//        template: 'Say:{{name}}'
//    }
//});

////create isolate scope in directive
//scopeCtrl.run(function ($rootScope, $http) {

//}).controller("CreateIsolateScopeInDirectiveCtrl", function ($scope) {
//    $scope.user = {
//        id: 1,
//        name: "hello world"
//    };
//}).directive('createIsolateScopeInDirective', function () {
//    return {
//        scope: {},
//        template: 'Name: {{user.name}} Street: {{user.addr}}'
//    };
//});

//// @scope
//scopeCtrl.run(function ($rootScope, $http) { }).controller("PartialScope1Ctrl", function ($scope) {
//    $scope.name = "hello world";
//}).directive("partialScopeDirective1", function () {
//    return {
//        scope: {
//            name: "@",
//            template: 'Say：{{name}} <br>改变隔离scope的name：<input type="text" value="" ng-model="name"/>'
//        },
//    };
//});

//// =Scope
//scopeCtrl.run(function ($rootScope, $http) { }).controller("PartialScope2Ctrl", function ($scope) {
//    $scope.user = {
//        name: 'hello',
//        id: 1
//    };
//}).directive("partialScopeDirective2", function () {
//    return {
//        scope: {
//            user: "=",
//        },
//        template: 'Say：{{user.name}} <br>改变隔离scope的name：<input type="text" value="" ng-model="user.name"/>'
//    };
//});

//// &scope
//scopeCtrl.run(function ($rootScope, $http) { }).controller("PartialScope3Ctrl", function ($scope) {
//    $scope.value = "hello world";
//    $scope.click = function () {
//        $scope.value = Math.random;
//    };
//}).directive("partialScopeDirective3", function () {
//    return {
//        scope: {
//            action: "&"
//        },
//        template: '<input type="button" value="在directive中执行父scope定义的方法" ng-click="action()"/>'
//    };
//});