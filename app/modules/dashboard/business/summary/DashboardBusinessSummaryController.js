'use strict';

function DashboardBusinessSummaryCtrl($scope) {
/* =======================================================================
	Modals
======================================================================= */
	$scope.openRedeemCertificate = function () {
		$scope.redeemCertificateModal.open({
			windowClass: 'redeem-certificate'
		});
	};

}

DashboardBusinessSummaryCtrl.$inject = ['$scope'];
module.exports = DashboardBusinessSummaryCtrl;
