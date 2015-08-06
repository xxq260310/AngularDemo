// Factory
//angular.module("myFactoryModule", []).factory("myFactory", "$http", function ($http) {
//    var list = {};
//    list.getLists = function () {
//        return $http.get('/UserProfiles/Index');
//    }
//    return list;
//});

//List Service
var myServiceModule = angular.module("myServiceModule", []).service("myListService", function ($http) {
    this.getLists = function () {
        return $http.get('/UserProfiles/GetList');
    };
});

//Edit Or Create Service
myServiceModule.service("myEditService", function ($http) {
    this.getSingleList = function (id) {
        return $http({
            method: 'get',
            url: '/UserProfiles/GetSingleList',
            params: { id: id }
        });
    };

    this.save = function (userProfile) {
        return $http.post("/UserProfiles/Update", $.param(userProfile), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };

    this.getProvinces = function () {
        return $http.get("/UserProfiles/GetProvinces");
    };

    this.getCities = function (province) {
        return $http({
            method: 'get',
            url: '/UserProfiles/GetCities',
            params: { id: province }
        });
    };
    this.getTowns = function (pvm) {
        return $http.post("/UserProfiles/GetTowns", $.param(pvm), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
    };
});

myServiceModule.service("myDeleteService", function ($http) {
    this.delete = function (id) {
        return $http({
            method: 'post',
            url: '/userProfiles/DeleteConfirmed',
            params: { id: id }
        });
    };
});




