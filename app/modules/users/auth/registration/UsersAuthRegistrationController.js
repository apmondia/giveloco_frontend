/*jshint camelcase: false */
'use strict';

function UsersAuthRegistrationCtrl($rootScope, $scope) {

	/* =======================================================================
		User Data for Form Submission
	======================================================================= */
	$scope.user = {
		role: null,
		first_name: null,
		last_name: null,
		email: null,
		password: null,
		company_name: null,
		website: null,
		street_address: null,
		country: null,
		state: null,
		zip: null,
		phone: null,
		tag_list: null,
		description: null,
		summary: null
	};
}

UsersAuthRegistrationCtrl.$inject = ['$rootScope', '$scope'];
module.exports = UsersAuthRegistrationCtrl;