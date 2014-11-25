'use strict';

module.exports = angular.module('users.auth.stripe', [])
	.directive('usersAuthStripe', require('./usersAuthStripeDirective'))
	.controller('UsersAuthStripeCtrl', require('./UsersAuthStripeController'));