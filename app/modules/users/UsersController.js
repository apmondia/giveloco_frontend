'use strict';

function UsersCtrl($scope, formValidation) {
	/* =======================================================================
		Form Validation Regex
	======================================================================= */
	// Real Name
	$scope.nameRegex = formValidation.lettersOnly;
	// Company Name
	$scope.companyRegex = formValidation.alphaNumPeriod;
	// Email Address
	$scope.emailRegex = formValidation.emailRegex;
	// Phone Number
	$scope.phoneRegex = formValidation.phoneRegex;
	// Website
	$scope.websiteRegex = formValidation.websiteRegex;
	// Text Area
	$scope.textAreaRegex = formValidation.textAreaRegex;


	/* =======================================================================
		Check User's Role
	======================================================================= */
	$scope.userRoleIsNot = function(userRole) {
		return ($scope.currentUser.role !== userRole) ? true : false;
	};

	$scope.userRoleIs = function(userRole) {
		return ($scope.currentUser.role === userRole) ? true : false;
	};
}

UsersCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersCtrl;