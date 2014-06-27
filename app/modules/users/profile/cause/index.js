'use strict';

module.exports = angular.module('users.profile.cause', [])
	.directive('usersProfileCause', require('./usersProfileCauseDirective'))
	.controller('UsersProfileCauseCtrl', require('./UsersProfileCauseController'));