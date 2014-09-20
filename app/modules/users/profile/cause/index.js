'use strict';

module.exports = angular.module('users.profile.cause', [
		require('./supporting-businesses').name
	])
	.directive('usersProfileCause', require('./usersProfileCauseDirective'))
	.controller('UsersProfileCauseCtrl', require('./UsersProfileCauseController'));