'use strict';

var ENV = (function() {
    return {
        DEV: {
        	serverUrl: 'http://localhost:3000/'
        },
        PROD: {
        	serverUrl: 'http://api.giveloco.com/'
        }
    };
}());

ENV.$inject = [];
module.exports = ENV;