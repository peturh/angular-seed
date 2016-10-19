var app = require('app');
app.directive('hideElement', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind('click',function(){
                    console.log("EVENT");
                    console.log(element)
                    element[0].style.display = "none";
                });
            }
        };
    }]);