'use strict';

module.exports = angular.module('users.profile.cause.supporting-businesses', [])
	.directive('usersProfileCauseSupportingBusinesses', function () {
		return {
			controller: 'UsersProfileCauseSupportingBusinessesCtrl',
			template: require('./users-profile-cause-supporting-businesses.html'),
			restrict: 'EA',
			scope: true
		};
	})
	.controller('UsersProfileCauseSupportingBusinessesCtrl', require('./UsersProfileCauseSupportingBusinessesController'));