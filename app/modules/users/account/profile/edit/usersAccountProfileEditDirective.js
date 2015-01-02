'use strict';

module.exports = function usersAccountProfileEditDirective() {
	return {
		controller: 'UsersAccountProfileEditCtrl',
		template: require('./users-account-profile-edit.html'),
		restrict: 'A',
		scope: false,
		link: function(scope, element) {
			$(element).on('focus','#userTags', function () {
				scope.updateUserForm.tags.$focused = true;
			});
			$(element).on('blur', '#userTags', function () {
				scope.updateUserForm.tags.$focused = false;
			});
			scope.$on('$destroy', function () {
				angular.element('#userTags').unbind('focus');
				angular.element('#userTags').unbind('blur');
			});
		}
	};
};
