'use strict';

function UsersAccountDetailsViewCtrl($rootScope, $scope) {
	
	$scope.$parent.toggleEditMode = function() {
		$scope.$parent.editing = !$scope.$parent.editing;
	};

	$scope.tagList = $scope.currentUser.tags.toString();
}

UsersAccountDetailsViewCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAccountDetailsViewCtrl;