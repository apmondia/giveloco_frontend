'use strict';

module.exports = angular.module('users.account.sponsors', [])
	.directive('usersAccountSponsors', require('./usersAccountSponsorsDirective'))
	.controller('UsersAccountSponsorsCtrl', require('./UsersAccountSponsorsController'));