'use strict';

function FormDonateCtrl($rootScope, $scope) {
	$scope.form = 'Donate Form goes here.';
}

FormDonateCtrl.$inject = ['$rootScope', '$scope'];
module.exports = FormDonateCtrl;