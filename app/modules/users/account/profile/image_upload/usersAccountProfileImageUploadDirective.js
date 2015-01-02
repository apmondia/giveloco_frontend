'use strict';

module.exports = function usersAccountProfileImageUploadDirective() {
	return {
		controller: 'UsersAccountProfileImageUploadCtrl',
		template: require('./users-account-profile-image-upload.html'),
		restrict: 'A',
		scope: true
	};
};
