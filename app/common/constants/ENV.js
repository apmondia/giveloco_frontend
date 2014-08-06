'use strict';

var ENV = (function() {
    return {
        DEV: {
        	serverUrl: 'http://localhost:3000/'
        },
        PROD: {
        	serverUrl: 'http://api.taliflo.com/'
        }
    };
}());

ENV.$inject = [];
module.exports = ENV;