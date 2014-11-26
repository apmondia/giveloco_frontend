'use strict';

var AUTH_EVENTS = (function() {
    return {
        loginSuccess: 'You have successfully logged in.',
		loginFailed: 'Unable to log in: Please ensure that your email and password are correct.',
		logoutSuccess: 'You have successfully logged out.',
		signupSuccess: 'You have successfully registered a new account.',
		signupFailed: 'Something went wrong. Please correct any errors and try again.',
		sessionTimeout: 'Your session has timed out.',
		notAuthenticated: 'Invalid Credentials: You must log in to access that page.',
		notAuthorized: 'Access Denied: You do not have permission to access that page.',
		passwordUpdated: 'Your password has been changed successfully.',
		passwordUpdateFailed: 'Your password could not be updated. Please confirm that your current password is correct.',
    stripeConnected: 'Your Stripe account has been connected.',
    stripeConnectionFailed: 'Your Stripe account could not be connected'
    };
}());

AUTH_EVENTS.$inject = [];
module.exports = AUTH_EVENTS;
