'use strict';

function UsersCtrl($scope, formValidation) {
	/* =======================================================================
		Form Validation Regex
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

	console.log('users controller');
}

UsersCtrl.$inject = ['$scope', 'formValidation'];
module.exports = UsersCtrl;