'use strict';

module.exports = function usersProfileBusinessPurchaseStepTwoDirective() {
	return {
		controller: 'UsersProfileBusinessPurchaseCtrl',
		template: require('./users-profile-business-purchase-step-two.html'),
		restrict: 'A',
		scope: false
	};
};