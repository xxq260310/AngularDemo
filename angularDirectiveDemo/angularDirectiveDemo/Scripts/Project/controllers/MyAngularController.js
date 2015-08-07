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
    $scope.provinces = {};
    myEditService.getProvinces().success(function (data) {
        $scope.provinces = data;
    });

    $scope.province2cities = {};
    $scope.Cities = function () {
        var province = $scope.Employee.Province;
        if (province) {
            myEditService.getCities(province).success(function (data) {
                $scope.province2cities = data;
            });
        }
        else {
            $scope.province2cities = null;
        }
    };

    $scope.city2towns = {};
    $scope.Towns = function () {
        var city = $scope.Employee.City;
        var province = $scope.Employee.Province;
        if (city) {
            var pvm = {
                City: city,
                Province: province
            };
            myEditService.getTowns(pvm).success(function (data) {
                $scope.city2towns = data;
            });
        }
        else {
            $scope.city2towns = null;
        }
    };

    if ($route.current.params.id) {
        $scope.id = $route.current.params.id;
        $scope.title = "Edit Employee";
        myEditService.getSingleList($scope.id).success(function (data) {
            $scope.Employee = {
                FirstName: data.FirstName,
                LastName: data.LastName,
                Province: data.Province,
                Town: data.Town,
                Address: data.Address,
                City: data.City,
                IsActive: data.IsActive,
                Description: data.Description,
                BirthDate: new Date(data.BirthDate),
                EmployeeId: data.EmployeeId
            };
            $scope.copy = angular.copy($scope.Employee);
            $scope.Cities();
            $scope.Towns();
        }).error(function (data) {
            $scope.ErrorMessage = "An error has occured while getting edit list!" + data.ExceptionMessage;
        });
    }
    else {
        $scope.title = "Create New Employee";
    }

    $scope.reset = function () {
        $scope.Employee = angular.copy($scope.copy);
        $scope.Cities();
        $scope.Towns();
    };

    $scope.save = function () {
        var userProfile = {
            EmployeeId: $scope.Employee.EmployeeId,
            FirstName: $scope.Employee.FirstName,
            LastName: $scope.Employee.LastName,
            Province: $scope.Employee.Province,
            City: $scope.Employee.City,
            Town: $scope.Employee.Town,
            Address: $scope.Employee.Address,
            IsActive: $scope.Employee.IsActive,
            Description: $scope.Employee.Description,
            BirthDate: new Date($scope.Employee.BirthDate).toDateString(),
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

//Details Ctrl
var myDetailsCtrl = angular.module("myDetailsCtrl", []);
myDeleteCtrl.controller("DetailsController", ["$scope", "myEditService", "$route", function ($scope, myEditService, $route) {
    $scope.id = $route.current.params.id;
    myEditService.getSingleList($scope.id).success(function (data) {
        $scope.Employee = data;
    }).error(function (data) {
        $scope.ErrorMessage = "An error has occured while deleting customer!" + data.ExceptionMessage;
    });
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

//
var filter = angular.module("filterCtrlModule", []).controller("filtercontroller", ["$scope", function ($scope) {
    $scope.count = 1.1;
    $scope.amount = 13212.123;
    $scope.currentdate = 20111111;
}]);

angular.module('limitToExample', [])
  .controller('limitToExampleController', ['$scope', function ($scope) {
      $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      $scope.letters = "abcdefghi";
      $scope.longNumber = 2345432342;
      $scope.numLimit = 3;
      $scope.letterLimit = 3;
      $scope.longNumberLimit = 3;
  }]);

angular.module('orderByExample', [])
   .controller('orderByExampleController', ['$scope', function ($scope) {
       $scope.friends =
           [{ name: 'John', phone: '555-1212', age: 10 },
            { name: 'Mary', phone: '555-9876', age: 19 },
            { name: 'Mike', phone: '555-4321', age: 21 },
            { name: 'Adam', phone: '555-5678', age: 35 },
            { name: 'Julie', phone: '555-8765', age: 29 }];
       $scope.predicate = '-age';
   }]);

angular.module('selectExample', [])
  .controller('selectExampleController', ['$scope', function ($scope) {
      $scope.colors = [
        { name: 'black', shade: 'dark' , id : 1},
        { name: 'white', shade: 'light' , id : 2},
        { name: 'red', shade: 'dark' , id : 3},
        { name: 'blue', shade: 'dark' , id : 4},
        { name: 'yellow', shade: 'light' , id : 5}
      ];
      $scope.myColor = $scope.colors[2]; // red
  }]);