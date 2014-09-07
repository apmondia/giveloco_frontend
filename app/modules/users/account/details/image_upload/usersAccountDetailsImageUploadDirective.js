'use strict';

module.exports = function usersAccountDetailsImageUploadDirective() {
	return {
		controller: 'UsersAccountDetailsImageUploadCtrl',
		template: require('./users-account-details-image-upload.html'),
		restrict: 'A',
		scope: true
	};
};