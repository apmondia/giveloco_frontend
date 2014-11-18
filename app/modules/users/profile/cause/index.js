'use strict';

module.exports = angular.module('users.profile.cause', [
		require('./sponsors').name,
		require('./sponsorship-request').name
	])
	.directive('usersProfileCause', require('./usersProfileCauseDirective'))
	.controller('UsersProfileCauseCtrl', require('./UsersProfileCauseController'));