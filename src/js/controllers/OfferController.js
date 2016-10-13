var app = require('app');

app.controller('OfferController', ['$scope','APIService',function($scope,APIService){

    var offer = this;

    offer.init = function(){
        APIService.getOffer(1).then(function(response){
            offer.theOffer = response.data;
        })
    };
}]);