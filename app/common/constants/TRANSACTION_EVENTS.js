'use strict';

var TRANSACTION_EVENTS = (function() {
    return {
    	paymentFailure: 'Uh Oh! Something went wrong. Your credit card information may not be valid.',
        transactionFailure: 'Uh Oh! Something went wrong. Please check that your information is correct and try again.',
        transactionSuccess: 'Your transaction was completed successfully!'
    };
}());

TRANSACTION_EVENTS.$inject = [];
module.exports = TRANSACTION_EVENTS;