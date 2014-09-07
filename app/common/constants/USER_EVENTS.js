'use strict';

var USER_EVENTS = (function() {
    return {
        accountUpdateSuccess: 'Your account information was successfully updated.',
        accountUpdateFailure: 'There was a problem updating your account. Please try again.',
        formContainsErrors: 'Please correct any errors in your form and try again.',
        imageUploadSuccess: 'Your file was successfully uploaded.',
        imageUploadFailure: 'A problem occured during file transfer. Please try again.'
    };
}());

USER_EVENTS.$inject = [];
module.exports = USER_EVENTS;