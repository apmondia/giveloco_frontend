'use strict';

function UsersAccountDetailsViewCtrl($rootScope, $scope) {
	$scope.tagList = $scope.currentUser.tags.join(', ');
}

UsersAccountDetailsViewCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountDetailsViewCtrl;