'use strict';

function UsersCtrl($scope, $state, formValidation, Restangular) {
	/* =======================================================================
		Form Validation Regex
	======================================================================= */
	// Real Name
	$scope.nameRegex = formValidation.lettersOnly;
	// Email Address
	$scope.emailRegex = formValidation.emailRegex;
	// Phone Number
	$scope.phoneRegex = formValidation.phoneRegex;
	// Website
	$scope.websiteRegex = formValidation.websiteRegex;
	// Text Area
	$scope.textAreaRegex = formValidation.textAreaRegex;
	//
	$scope.sponsorshipRateRegex = /\d+/;


	/* =======================================================================
		Check User's Role
	======================================================================= */
	$scope.userRoleIsNot = function(userRole) {
		return ($scope.user.role !== userRole) ? true : false;
	};

	$scope.userRoleIs = function(userRole) {
		return ($scope.user.role === userRole) ? true : false;
	};

	$scope.user = {};
	function refreshProfileUser() {
		Restangular.one('users', $state.params["id"]).get().then(function (user) {
			$scope.user = user;
			//console.debug("User: ", user);
			$scope.$broadcast('set-profile-user', user);
		});
	}

	$scope.$on('refresh-profile-user', function(event) {
			refreshProfileUser();
	});

	refreshProfileUser();

}

UsersCtrl.$inject = ['$scope', '$state', 'formValidation', 'Restangular'];
module.exports = UsersCtrl;
