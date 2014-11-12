'use strict';

function UsersProfileCtrl($rootScope, $scope) {

	// Define the user's image
	$scope.userImage = $scope.user.images.profile_picture.medium;

	// Strip protocol from website for profile page presentation
	$scope.shortURL = $scope.user.website.replace(/.*?:\/\//g, '');


	/* =======================================================================
		Modals
	======================================================================= */
    $scope.changeUserStatus = function(userParam) {
        $scope.changeUserStatusModal.open({
        	windowClass: 'change-user-status',
        	controller: 'ChangeUserStatusCtrl',
        	resolve: {
		        user: function () {
					return userParam;
		        }
			}
        });
	};

}

UsersProfileCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersProfileCtrl;