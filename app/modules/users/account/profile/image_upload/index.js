'use strict';

module.exports = angular.module('users.account.profile.imageUpload', [])
	.directive('usersImageUpload', require('./usersAccountProfileImageUploadDirective'))
	.controller('UsersAccountProfileImageUploadCtrl', require('./UsersAccountProfileImageUploadController'));
