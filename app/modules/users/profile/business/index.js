'use strict';

module.exports = angular.module('users.profile.business', [
		require('./modals').name,
		require('./purchase').name,
		require('./sponsored-causes').name
	])
	.directive('usersProfileBusiness', require('./usersProfileBusinessDirective'))
	.controller('UsersProfileBusinessCtrl', require('./UsersProfileBusinessController'));