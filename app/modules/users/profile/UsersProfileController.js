'use strict';

function UsersProfileCtrl($rootScope, $scope, user) {
	$scope.user = user;

	// Define the user's image
	$scope.userImage = $scope.user.images.profile_picture.medium;

	// Strip protocol from website for profile page presentation
	$scope.shortURL = $scope.user.website.replace(/.*?:\/\//g, '');

}

UsersProfileCtrl.$inject = ['$rootScope', '$scope', 'user'];
module.exports = UsersProfileCtrl;