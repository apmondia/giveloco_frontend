'use strict';

function DashboardCtrl($rootScope, $scope, Auth, DashService, usSpinnerService, $timeout) {

/* =======================================================================
	Show Dashboard based on user's role
======================================================================= */
	if (Auth.isLoggedIn() === true) {
		$scope.spinner = true;
		Auth.getCurrentUser().then(function(currentUser){
			DashService.showDashByRoleFor(currentUser);
			$scope.spinner = false;
		});
	}

}

DashboardCtrl.$inject = ['$rootScope', '$scope', 'Auth', 'DashService', 'usSpinnerService', '$timeout'];
module.exports = DashboardCtrl;