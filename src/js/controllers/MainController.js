var app = require('app');

app.controller('MainController', ['$scope', 'APIService',
    function ($scope, APIService) {
        var main = this; // just to

        /**
         * This is a standard array of words
         * @type {string[]}
         */

        main.list = ['First', 'Second', 'Third', 'Fourth', 'The End']

        /**
         * The functions in this file is available from "main.html"
         * if you write them with the scope: main
         */

        /**
         * The init function - This runs before everything else
         */
        main.init = function () {

            //This is a promise from angular, it's synchronous so you have to wait for the response inside a promise...
            APIService.getSomething().then(function (data) {

                //Please log data variable to understand how this works
                console.log(data);
                main.dataFromService = data.response;
            })
        };

        /**
         * Just a function that does something
         * @param site - The selected site
         */

        main.doSomethingWithVariable = function (site) {
            main.selectedSite = site;
        };


        function foo() {
            //this function is not available from the scope, or "main.html"
        }

        var bar = function () {
            //this is also a function but is written with a different syntax, not visible from "main.html" either
        }

    }]);