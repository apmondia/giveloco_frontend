'use strict';

function FormPledgeCtrl($rootScope, $scope) {
	$scope.form = 'Pledge Form goes here.';
}

FormPledgeCtrl.$inject = ['$rootScope', '$scope'];
module.exports = FormPledgeCtrl;