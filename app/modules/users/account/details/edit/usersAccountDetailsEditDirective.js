'use strict';

module.exports = function usersAccountDetailsEditDirective() {
	return {
		controller: 'UsersAccountDetailsEditCtrl',
		template: require('./users-account-details-edit.html'),
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
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
