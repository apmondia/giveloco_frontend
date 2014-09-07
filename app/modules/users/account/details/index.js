'use strict';

module.exports = angular.module('users.account.details', [
		require('./image_upload').name
	])
	.directive('usersAccountDetails', require('./usersAccountDetailsDirective'))
	.controller('UsersAccountDetailsCtrl', require('./UsersAccountDetailsController'));