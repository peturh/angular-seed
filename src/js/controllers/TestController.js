var app = require('app');

app.controller('TestController', ['$scope','APIService','$stateParams',function($scope,APIService,$stateParams){

    var test = this;
    var id = $stateParams.id;

    test.init = function(){
    APIService.getApi().then(function (response) {
        //Please log data variable to understand how this works
        test.apiList = response.data;
        console.log(test.apiList);
    });
    };
}]);
