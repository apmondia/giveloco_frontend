'use strict';

module.exports = angular.module('users.profile.business.sponsorship-request', [])
	.directive('usersProfileCauseSponsorshipRequest', require('./usersProfileCauseSponsorshipRequestDirective'))
	.controller('UsersProfileCauseSponsorshipRequestCtrl', require('./UsersProfileCauseSponsorshipRequestController'));