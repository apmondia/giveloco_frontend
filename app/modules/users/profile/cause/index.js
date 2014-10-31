'use strict';

module.exports = angular.module('users.profile.cause', [
		require('./sponsors').name
	])
	.directive('usersProfileCause', require('./usersProfileCauseDirective'))
	.controller('UsersProfileCauseCtrl', require('./UsersProfileCauseController'));