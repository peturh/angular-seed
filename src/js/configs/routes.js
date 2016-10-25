/**
 * Since this is a small project, this file isn't really needed, but for future requirements maybe.
 *
 */

var app = require('app');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    // Här lägger vi till routes om det behövs.
    // Här används ui-router
    $stateProvider

        .state('/', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('/offer', {
            url : '/offer/{id}',
            templateUrl : 'offer.html',
            controller : 'OfferController',
            controllerAs : 'offer'
        })
        .state('/test', {
          url : '/test/',
          templateUrl : 'test.html',
          controller : 'TestController',
          controllerAs : 'test'
        })
}]);
