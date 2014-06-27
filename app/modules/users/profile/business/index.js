'use strict';

module.exports = angular.module('users.profile.business', [
		require('./vouchers').name
	])
	.directive('usersProfileBusiness', require('./usersProfileBusinessDirective'))
	.controller('UsersProfileBusinessCtrl', require('./UsersProfileBusinessController'));