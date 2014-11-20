'use strict';

var SPONSORSHIP = (function() {
    return {
    	status: {
    		pending: 0,
    		accepted: 1,
    		cancelled: 2
    	}
    };
}());

SPONSORSHIP.$inject = [];
module.exports = SPONSORSHIP;