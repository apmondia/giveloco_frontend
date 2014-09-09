'use strict';

module.exports = angular.module('users.account.details.view', [])
	.directive('usersAccountDetailsView', require('./usersAccountDetailsViewDirective'))
	.controller('UsersAccountDetailsViewCtrl', require('./UsersAccountDetailsViewController'));