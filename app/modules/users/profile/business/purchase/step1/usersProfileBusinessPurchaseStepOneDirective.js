'use strict';

module.exports = function usersProfileBusinessPurchaseStepOneDirective() {
	return {
		controller: 'UsersProfileBusinessPurchaseCtrl',
		template: require('./users-profile-business-purchase-step-one.html'),
		restrict: 'A',
		scope: true
	};
};