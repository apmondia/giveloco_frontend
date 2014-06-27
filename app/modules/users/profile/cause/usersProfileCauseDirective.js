'use strict';

module.exports = function usersProfileCause() {
	return {
		controller: 'UsersProfileCauseCtrl',
		template: require('./users-profile-cause.html'),
		restrict: 'A',
		scope: true
	};
};