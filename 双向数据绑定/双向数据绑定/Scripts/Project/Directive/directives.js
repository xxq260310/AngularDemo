routeApp.directive("myClick", function () {
    return function (scope, element, attr) {
        element.on('click', function () {
            scope.counter++;
        })
    };
});