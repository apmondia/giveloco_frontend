'use strict';

module.exports = function usersProfileCauseSponsorshipRequestDirective() {
	return {
		controller: 'usersProfileCauseSponsorshipRequestCtrl',
		template: require('./users-profile-cause-sponsorship-request.html'),
		restrict: 'A',
		scope: true
	};
};