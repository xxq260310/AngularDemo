angular.module("myDirectiveModule", []).directive("ngthead", function () {
    return {
        restrict: 'EA',
        //link: function (scope, element, attrs) {
        //    element.addClass('btn btn-primasry');
        //    element.bind('mouseenter', function(){
        //        console.log();
        //    });
        //}
        template: '<tr>' + '<th> EmployeeId </th>' + '<th>FirstName</th>' + '<th> LastName</th>' + '<th>Country</th>' + '<th>State</th>' + '<th>IsActive</th>' + '<th>Description</th>' + '<th>BirthDate</th>' + '</tr>',
        replace: true
    };
});