'use strict';

function UsersProfileBusinessCtrl($rootScope, $scope) {
	$scope.profile = 'Business Profile goes here.';
}

UsersProfileBusinessCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersProfileBusinessCtrl;