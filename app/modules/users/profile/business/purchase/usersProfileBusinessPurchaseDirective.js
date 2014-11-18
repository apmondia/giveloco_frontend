'use strict';

module.exports = function usersProfileBusinessPurchaseDirective() {
	return {
		controller: 'UsersProfileBusinessPurchaseCtrl',
		template: require('./users-profile-business-purchase.html'),
		restrict: 'A',
		scope: true
	};
};