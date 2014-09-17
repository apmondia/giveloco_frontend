'use strict';

function UsersProfileCtrl($rootScope, $scope, user) {
	$scope.user = user;

	$scope.userImage = $scope.user.images.profile_picture.medium;
}

UsersProfileCtrl.$inject = ['$rootScope', '$scope', 'user'];
module.exports = UsersProfileCtrl;