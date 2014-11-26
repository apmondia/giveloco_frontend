'use strict';

module.exports = function usersProfileBusinessPurchaseStepThreeDirective() {
	return {
		controller: 'UsersProfileBusinessPurchaseCtrl',
		template: require('./users-profile-business-purchase-step-three.html'),
		restrict: 'A',
		scope: true
	};
};