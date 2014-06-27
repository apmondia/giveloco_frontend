'use strict';

function FormClaimCtrl($rootScope, $scope) {
	$scope.form = 'Claim Form goes here.';
}

FormClaimCtrl.$inject = ['$rootScope', '$scope'];
module.exports = FormClaimCtrl;