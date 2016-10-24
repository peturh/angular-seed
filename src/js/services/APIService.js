var app = require('app');

app.service('APIService', ['$http', function ($http) {

    var service = {};


    /* *
     * Gets ALL from api
     * @returns {*} - The requested stuff
     */
    service.getSomething = function () {
        return $http(
            {
                method: 'GET',
                url: "/getSomething"
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

	service.getNews = function () {
        return $http(
            {
                method: 'GET',
                url: "/getNews"
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    service.getOffer = function(id){
        return $http(
            {
                method: 'GET',
                url: "/offer/"+id
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    }

    service.getApi = function () {
        return $http(
            {
                method: 'GET',
                url: "/apiTest"
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    /* *
     * Get additional information from device
     * @returns {*} - The device
     */

    service.setSomething = function (id) {
        return $http(
            {
                method: 'POST',
                url: "/setSomething/"+id,
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    return service;
}]);
