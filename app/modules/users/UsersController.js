'use strict';

function UsersCtrl($scope, formValidation, Restangular) {
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
}

UsersCtrl.$inject = ['$scope', 'formValidation', 'Restangular'];
module.exports = UsersCtrl;