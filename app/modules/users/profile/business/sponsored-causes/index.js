'use strict';

module.exports = angular.module('users.profile.business.sponsored-causes', [])
	.directive('usersProfileBusinessSponsoredCauses', function () {
		return {
			controller: 'UsersProfileBusinessSponsoredCausesCtrl',
			template: require('./users-profile-business-sponsored-causes.html'),
			restrict: 'EA',
			scope: true
		};
	})
	.controller('UsersProfileBusinessSponsoredCausesCtrl', require('./UsersProfileBusinessSponsoredCausesController'));