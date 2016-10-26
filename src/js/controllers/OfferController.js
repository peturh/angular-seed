var app = require('app');

app.controller('OfferController', ['$scope','APIService','$stateParams',function($scope,APIService,$stateParams){

    var offer = this;

    //Detta är inte säkert att det körs (tror jag, slänger in i init istället)
   // var id = $stateParams.id;

    offer.init = function(){
        var id = $stateParams.id;
        APIService.getOffer(id).then(function(response){
            offer.theOffer = response.data;
            console.log("response",response.data);
        })
    };
}]);
