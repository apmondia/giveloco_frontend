'use strict';

var TRANSACTION_EVENTS = (function() {
    return {
    	creationSuccess: 'A new Sponsorship was successfully created!',
        creationFailure: 'Uh Oh! Something went wrong. Please check that your information is correct and try again.'
    };
}());

TRANSACTION_EVENTS.$inject = [];
module.exports = TRANSACTION_EVENTS;