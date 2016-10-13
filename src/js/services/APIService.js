var app = require('app');

app.service('APIService', ['$http', function ($http) {

    var service = {};

    /**
     * Get specific ID from API
     * @returns {*} - The sites available
     */
    service.getSomething = function (id) {
        return $http(
            {
                method: 'GET',
                url: "/get/"+id
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    /**
     * Gets ALL from api
     * @returns {*} - The requested stuff
     */
    service.getSomething = function () {
        return $http(
            {
                method: 'GET',
                url: "/get"
            })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    /**
     * Get additional information from device
     * @returns {*} - The device
     */

    service.setSomething = function (id) {
        return $http(
            {
                method: 'POST',
                url: "/set/"+id,
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