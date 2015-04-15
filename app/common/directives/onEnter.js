'use strict';

var inputEnter = function() {
    return {
        restrict: 'A',
        scope: {
          
        },
        link: function (scope, element) {
            element.on('keypress', function (event) {
              if (event.keyCode == 13) {
                event.stopPropagation();
              }
            });
        }
    };
};

inputEnter.$inject = [];
module.exports = inputEnter;
