'use strict';

module.exports = function usersAuthStripeDirective() {
	return {
		controller: 'UsersAuthStripeCtrl',
		template: require('./users-auth-stripe.html'),
		restrict: 'A',
		scope: true
	};
};