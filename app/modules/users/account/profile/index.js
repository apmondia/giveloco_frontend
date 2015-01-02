'use strict';

module.exports = angular.module('users.account.profile', [
		require('./edit').name,
		require('./view').name,
		require('./image_upload').name
	])
	.directive('usersAccountProfile', require('./usersAccountProfileDirective'))
	.controller('UsersAccountProfileCtrl', require('./UsersAccountProfileController'));
