'use strict';

function DashboardBusinessSponsorshipsCtrl($rootScope, $scope) {
  
	$scope.sponsorships = function () {
		return $scope.currentUser.getList('sponsorships');
	};

}

DashboardBusinessSponsorshipsCtrl.$inject = ['$rootScope', '$scope'];
module.exports = DashboardBusinessSponsorshipsCtrl;
