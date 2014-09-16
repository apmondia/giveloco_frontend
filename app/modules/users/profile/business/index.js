'use strict';

module.exports = angular.module('users.profile.business', [
		require('./supported-causes').name
	])
	.directive('usersProfileBusiness', require('./usersProfileBusinessDirective'))
	.controller('UsersProfileBusinessCtrl', require('./UsersProfileBusinessController'));