'use strict';

module.exports = angular.module('users.account.profile.view', [])
	.directive('usersAccountProfileView', require('./usersAccountProfileViewDirective'))
	.controller('UsersAccountProfileViewCtrl', require('./UsersAccountProfileViewController'));
