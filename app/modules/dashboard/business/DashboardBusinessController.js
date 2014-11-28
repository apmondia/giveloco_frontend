'use strict';

function DashboardBusinessCtrl($scope) {

  $scope.openRedeemCertificate = function () {
    $scope.redeemCertificateModal.open({
      windowClass: 'redeem-certificate'
    });
  };

}

DashboardBusinessCtrl.$inject = ['$scope'];
module.exports = DashboardBusinessCtrl;
