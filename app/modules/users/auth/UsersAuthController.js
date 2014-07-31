'use strict';

function UsersAuthCtrl($scope, formValidation) {
	/* =======================================================================
		Form Validation
	======================================================================= */
	// Cause Name
	$scope.nameRegex = formValidation.alphaNum;
	// Email Address
	$scope.emailRegex = formValidation.emailRegex;
	// Website
	$scope.websiteRegex = formValidation.websiteRegex;
}

UsersAuthCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersAuthCtrl;