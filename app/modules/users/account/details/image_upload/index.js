'use strict';

module.exports = angular.module('users.account.details.imageUpload', [])
	.directive('usersImageUpload', require('./usersAccountDetailsImageUploadDirective'))
	.controller('UsersAccountDetailsImageUploadCtrl', require('./UsersAccountDetailsImageUploadController'));