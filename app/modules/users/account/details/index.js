'use strict';

module.exports = angular.module('users.account.details', [
		require('./edit').name,
		require('./view').name,
		require('./image_upload').name
	])
	.directive('usersAccountDetails', require('./usersAccountDetailsDirective'))
	.controller('UsersAccountDetailsCtrl', require('./UsersAccountDetailsController'));