'use strict';

module.exports = angular.module('users.profile.cause.sponsors', [])
	.directive('usersProfileCauseSponsors', function () {
		return {
			controller: 'UsersProfileCauseSponsorsCtrl',
			template: require('./users-profile-cause-sponsors.html'),
			restrict: 'EA',
			scope: true
		};
	})
	.controller('UsersProfileCauseSponsorsCtrl', require('./UsersProfileCauseSponsorsController'));