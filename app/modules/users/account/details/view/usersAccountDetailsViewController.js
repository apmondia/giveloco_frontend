'use strict';

function UsersAccountDetailsViewCtrl($rootScope, $scope) {
	if ($scope.currentUser.tags.length !== 0) {
		$scope.tagList = $scope.currentUser.tags.join(', ');
	} else {
		$scope.tagList = '';
	}
}

UsersAccountDetailsViewCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountDetailsViewCtrl;