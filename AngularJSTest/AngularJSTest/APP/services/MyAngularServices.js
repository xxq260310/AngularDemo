//// Factory
//angular.module("myFactoryModule", []).factory("myFactory", function ($http) {
//    var list = {};
//    list.getLists = function () {
//        return $http.get('/UserProfiles/Index');
//    }
//    return list;
//});

//Service
angular.module("myServiceModule", []).service("myService", function ($http) {
    var list = {};
    this.getLists = function () {
        return list = $http.get('/UserProfiles/Index');
    };
})