'use strict';

var ENV = (function() {
    return {
        DEV: {
        	url: 'http://localhost:3000/'
        },
        PROD: {
        	url: 'http://api.taliflo.com/'
        }
    };
}());

ENV.$inject = [];
module.exports = ENV;