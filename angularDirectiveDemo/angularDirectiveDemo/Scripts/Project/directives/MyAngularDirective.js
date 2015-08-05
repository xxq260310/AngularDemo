//list directive
var directive = angular.module("myDirectiveModule", ["myDirectiveCtrl1", "myDirectiveCtrl2", "isolatescope1", "isolatescope2", "isolatescope3", "myTransCludeCtrl"]);
directive.directive("ngtitle", function () {
    return {
        restrict: 'EA',
        template: '<tr><th></th><th></th><th>EmployeeId </th><th>FirstName</th><th>LastName</th><th>Description</th><th>Salary</th><th>Country</th><th>State</th><th>Date Of Birth</th><th>Is Active</th></tr>',
        replace: true
    };
});

//loading directive
directive.directive("loader", function () {
    return {
        restrict: 'EA',
        link: function (scope, element, attrs) {
            element.bind('mouseenter', function (event) {
                scope.$apply(attrs.howtoload);
                //scope.loadData();
                //scope.$apply("loadData2()");
            });
        }
    };
});

//superman directive
directive.directive("superman", function () {
    return {
        scope: {},
        restrict: "EA",
        controller: function ($scope) {
            $scope.abilities = [];
            this.addStrength = function () {
                $scope.abilities.push("Strength");
            };

            this.addLight = function () {
                $scope.abilities.push("Light");
            };

            this.addSpeed = function () {
                $scope.abilities.push("Speed");
            };
        },
        link: function (scopeq, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function () {
                console.log(scopeq.abilities);
            });
            //element.bind("click", function () {
            //    alert(scope.abilities);
            //});
        }
    }
});

directive.directive("strength", function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, aqrqwq) {
            aqrqwq.addStrength();
        }
    };
});

directive.directive("speed", function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, b) {
            b.addSpeed();
        }
    };
});

directive.directive("light", function () {
    return {
        require: '^superman',
        link: function (scope, element, attrs, c) {
            c.addLight();
        }
    };
});

//controller,link, compile
directive.directive("compare", function () {
    return {
        restrict: 'E',
        template: 'Hi' + '<p>{{description}}</p>' + '<br/>' + '<p> {{controller}} ! </p>' + '<br/>' + '<p>{{link}}</p>' + '<br/>' + '<p>{{preLinkElement}}</p>' + '<br/>' + '<p>{{postLinkElement}}</p>',
        controller: function ($scope, $element) {
            $scope.controller = "controller runs first";
        },
        link: function (scope, element, attrs) {
            scope.link = "link does not run if compile exists";
        },
        compile: function (element, attributes) {
            return {
                pre: function preLink(scope, element, attributes) {
                    scope.preLinkElement = "This a pre link of compile";
                },
                post: function postLink(scope, element, attributes) {
                    scope.postLinkElement = "This is a post link of compile";
                }
            };
        }
    };
});

//isolateDirective1  '&'
directive.directive("isolate1", function () {
    return {
        scope: {
            toogle: "&"
        },
        replace: false,
        //<span ng-transclude></span>
        //templateUrl: '/Test/transclude_part'
        template: '<input type="button" value="&符号主要用来在directive中执行父scope定义的方法" ng-click="toogle()" class="btn btn-primary"/>'
    };
});

//isolateDirective2  '@'
directive.directive("isolate2", function () {
    return {
        scope: {
            name: "@"
        },
        replace: false,
        template: '{{name}}<br/><span>改变隔离Scope的name: <input type="text" ng-model="name" class="ng-pristine"/></span>'
    };
});

//isolateDirective3 '='
directive.directive("isolate3", function () {
    return {
        scope: {
            user: "="
        },
        template: '{{user.name}} <br/> 改变隔离scope的name：<input type="text" ng-model="user.name"/>'

    };
});

//templateUrl
directive.directive("templateUrlDirective", function () {
    return {
        restrict: 'AECM',
        replace: true,
        templateUrl: '/UserProfiles/Index'
    };
});

//transclude directive
directive.directive("transclude", function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            'btnclick': '&'
        },
        templateUrl: '/Test/transclude_part'
    };
});