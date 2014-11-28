'use strict';

module.exports = angular.module('dashboard.business.modals.redeem-certificate', [])
.directive('dashboardBusinessModalsRedeemCertificate', function () {
  return {
    controller: 'RedeemCertificateCtrl',
    template: require('./redeem-certificate.html'),
    scope: true
  };
})
.controller('RedeemCertificateCtrl', require('./RedeemCertificateController'));
