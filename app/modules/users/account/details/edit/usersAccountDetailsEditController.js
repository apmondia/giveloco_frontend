'use strict';

function UsersAccountDetailsEditCtrl($rootScope, $scope, Auth, formValidation, regions) {

	/* =======================================================================
		Form Validation
	======================================================================= */
	// Zip / Postal Code
	$scope.$watch('user.country', function() {
		if ($scope.user.country.code === 'CA') {
			$scope.zipRegex = formValidation.postalCodeRegex;
			$scope.zipPlaceholder = 'A1B 2C3';
		} 
		if ($scope.user.country.code === 'US') {
			$scope.zipRegex = formValidation.zipCodeRegex;
			$scope.zipPlaceholder = '98765';
		}
	});
	

	/* =======================================================================
		Country & State Select Menus
	======================================================================= */

	$scope.statesList = regions.states;

	$scope.countries = function() {
		$scope.countryList = [];

		// List only the first 2 items in the list of countries - Canada and U.S.
		for (var i=0; i < 2; i++) {
			$scope.countryList.push(regions.countries[i]);
		}

		// Default Country is Canada
		$scope.user.country = $scope.countryList[0];
		// Default set of states is Canadian Provinces
		$scope.states = $scope.statesList[$scope.user.country.code];
		$scope.user.state = $scope.states[0];
	};

	$scope.countries();

	$scope.countryChange = function(user) {
		$scope.user.country = user.country;
		$scope.states = $scope.statesList[$scope.user.country.code];
		$scope.user.state = $scope.states[0];
	};

	$scope.stateChange = function(user) {
		$scope.user.state = user.state;
	};


	/* =======================================================================
		Format Phone Number
	======================================================================= */
	$scope.formatNumber = function() {
		if ($scope.user.phone !== null && $scope.user.phone !== undefined) {
			var phoneNum = $scope.user.phone.match(formValidation.phoneRegex);
			$scope.user.phone = '(' + phoneNum[1] + ') ' + phoneNum[2] + '-' + phoneNum[3];
		}
	};


	/* =======================================================================
		Format Tags for Submission
	======================================================================= */
	$scope.formatTags = function() {
		if ($scope.user.tag_list !== null && $scope.user.tag_list !== undefined) {
			$scope.user.tag_list = $scope.user.tag_list.replace(/\s*[,.!]\s*/g, ', ');
		}
	};


	/* =======================================================================
		Set Cause Summary
	======================================================================= */
	$scope.setSummary = function(user) {
		$scope.user.description = user.description;
		$scope.user.summary = user.summary;
		user.summary = user.description.match(/[^.!?]*/i)[0] + '.';
	};


	/* =======================================================================
		Reset form to defaults if the user toggles the view back to "View Details"
	======================================================================= */
	// Auth.getCurrentUser().then(function(data) {
	// 	$scope.user = data;
	// 	var pristineUser = $scope.user;

	// 	$scope.$parent.toggleEditMode = function() {
	// 		$scope.$parent.editing = !$scope.$parent.editing;
	// 		$scope.updateUserForm.$setPristine(true);
	// 		$scope.updateUserForm.user = angular.copy(pristineUser);
	// 	};
	// });
	
	var pristineUser = $scope.currentUser;

	$scope.$parent.toggleEditMode = function() {
		$scope.$parent.editing = !$scope.$parent.editing;
		$scope.updateUserForm.$setPristine(true);
		$scope.updateUserForm.user = angular.copy(pristineUser);
	};

}

UsersAccountDetailsEditCtrl.$inject = ['$rootScope', '$scope', 'Auth', 'formValidation', 'regions'];
module.exports = UsersAccountDetailsEditCtrl;