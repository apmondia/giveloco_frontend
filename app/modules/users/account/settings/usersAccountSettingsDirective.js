'use strict';

module.exports = function usersAccountSettingsDirective() {
	return {
		controller: 'UsersAccountSettingsCtrl',
		template: require('./users-account-settings.html'),
		restrict: 'A',
		scope: true
	};
};