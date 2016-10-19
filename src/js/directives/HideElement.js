var app = require('app');
app.directive('hideElement', [
    function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind('click',function(){
                    console.log(element) //kolla in detta i loggen så förstår du nästa steg!
                    element[0].style.display = "none";
                });
            }
        };
    }]);