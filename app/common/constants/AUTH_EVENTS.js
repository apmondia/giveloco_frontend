'use strict';

var AUTH_EVENTS = (function() {
    return {
        loginSuccess: 'You have successfully logged in.',
		loginFailed: 'Login failed. Please check your credentials.',
		logoutSuccess: 'You have successfully logged out.',
		signupSuccess: 'You have successfully registered a new account.',
		signupFailed: 'Something went wrong. Please try again.',
		sessionTimeout: 'Your session has timed out.',
		notAuthenticated: 'You must log in to access this page.',
		notAuthorized: 'You do not have permission to access that page.'
    };
}());

AUTH_EVENTS.$inject = [];
module.exports = AUTH_EVENTS;