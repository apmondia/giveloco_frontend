'use strict';

function RedeemCertificateCtrl($scope, formValidation, $http, alertService, TRANSACTION_EVENTS, apiConfig) {
  $scope.redemptionCodeRegex = formValidation.alphaNumNoWhitespace;
  $scope.redeemCertificate = function (valid) {
    if (!valid) {
      return;
    }

    $http({
        method: 'PUT',
        url: apiConfig.API.certificate.redeem,
        data: { redemption_code: $scope.redemptionCode }
      })
      .success(function() {
        alertService.showAlert(TRANSACTION_EVENTS.redemptionSuccess, 'alert-success');
        $scope.redeemCertificateModal.close();
      })
      .error(function() {
        alertService.showAlert(TRANSACTION_EVENTS.redemptionFailure, 'alert-danger');
        $scope.redeemCertificateModal.close();
      });

  };
}

RedeemCertificateCtrl.$inject = ['$scope', 'formValidation', '$http', 'alertService', 'TRANSACTION_EVENTS', 'apiConfig'];
module.exports = RedeemCertificateCtrl;
