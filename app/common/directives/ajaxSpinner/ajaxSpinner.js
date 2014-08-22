'use strict';

var ajaxSpinner = function() {
    return {
        restrict: 'A',
        template: require('./ajax-spinner.html')
    };
};

ajaxSpinner.$inject = [];
module.exports = ajaxSpinner;