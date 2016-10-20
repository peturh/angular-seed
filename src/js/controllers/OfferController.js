var app = require('app');

app.controller('OfferController', ['$scope','APIService','$stateParams',function($scope,APIService,$stateParams){

    var offer = this;
    var id = $stateParams.id;

    offer.init = function(){
        APIService.getOffer(id).then(function(response){
            offer.theOffer = response.data;
        })
    };
}]);
