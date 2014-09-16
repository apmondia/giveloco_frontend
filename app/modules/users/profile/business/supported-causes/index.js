'use strict';

module.exports = angular.module('users.profile.business.supported-causes', [])
	.directive('usersProfileBusinessSupportedCauses', function () {
		return {
			controller: 'UsersProfileBusinessSupportedCausesCtrl',
			template: require('./users-profile-business-supported-causes.html'),
			restrict: 'EA',
			scope: true
		};
	})
	.controller('UsersProfileBusinessSupportedCausesCtrl', require('./UsersProfileBusinessSupportedCausesController'));