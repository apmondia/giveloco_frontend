'use strict';

function UsersProfileCauseCtrl($rootScope, $scope) {
	$scope.profile = 'Cause Profile goes here.';
}

UsersProfileCauseCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersProfileCauseCtrl;