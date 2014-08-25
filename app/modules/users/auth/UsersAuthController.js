'use strict';

function UsersAuthCtrl($scope, formValidation) {
	/* =======================================================================
		Form Validation
	======================================================================= */
	// Real Name
	$scope.nameRegex = formValidation.lettersOnly;
	// Company Name
	$scope.companyRegex = formValidation.alphaNum;
	// Email Address
	$scope.emailRegex = formValidation.emailRegex;
	// Phone Number
	$scope.phoneRegex = formValidation.phoneRegex;
	// Website
	$scope.websiteRegex = formValidation.websiteRegex;
	// Tags
	$scope.tagsRegex = formValidation.alphaNumComma;
	// Text Area
	$scope.textAreaRegex = formValidation.textAreaRegex;
}

UsersAuthCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersAuthCtrl;