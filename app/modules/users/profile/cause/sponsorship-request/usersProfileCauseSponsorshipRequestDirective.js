'use strict';

module.exports = function usersProfileCauseSponsorshipRequestDirective() {
	return {
		controller: 'UsersProfileCauseSponsorshipRequestCtrl',
		template: require('./users-profile-cause-sponsorship-request.html'),
		restrict: 'A',
		scope: true
	};
};