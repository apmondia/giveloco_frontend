'use strict';

function DashboardAdminTabSponsorshipsCtrl($scope, Restangular) {

  $scope.loadSponsorships = function () {
    Restangular.all('sponsorships').getList().then(function (data) {
      $scope.sponsorships = data;
    });
  };

  $scope.loadSponsorships();

}

DashboardAdminTabSponsorshipsCtrl.$inject = ['$scope', 'Restangular'];
module.exports = DashboardAdminTabSponsorshipsCtrl;
