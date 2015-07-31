//list directive
var directive = angular.module("myDirectiveModule", ["myDirectiveCtrl1", "myDirectiveCtrl2", "myTransCludeCtrl"]);
directive.directive("ngtitle", function () {
    return {
        restrict: 'AE',
        template: '<tr>' + '<th></th>' + '<th></th>' + '<th>EmployeeId </th>' + '<th>FirstName</th>' + '<th>LastName</th>' + '<th>Description</th>' + ' <th>Salary</th> ' + '<th>Country</th>' + '<th>State</th>' + '<th>Date Of Birth</th>' + '<th>Is Active</th>' + '</tr>',
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
            this.addSpeed = function () {
                $scope.abilities.push("Speed");
            };
            this.addLight = function () {
                $scope.abilities.push("Light");
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

//transclude
directive.directive("transclude", function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            'close': '&onClick'
        },
        templateUrl: '/Test/transclude_part'
    };
});

//templateUrl
directive.directive("qwqq", function () {
    return {
        restrict: 'AECM',
        replace: true,
        templateUrl: '/UserProfiles/Index'
    };
});