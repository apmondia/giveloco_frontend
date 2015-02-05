'use strict';

function DashboardAdminTabSponsorshipsCtrl($scope, Restangular) {

  $scope.loadSponsorships = function () {
    Restangular.all('sponsorships').getList().then(function (data) {
      //console.debug("loadedSponsorships: ", data);
      $scope.sponsorships = data;
    });
  };

  $scope.loadSponsorships();

  $scope.$on('sponsorshipsChanged',function() {
    $scope.loadSponsorships();
  });

}

DashboardAdminTabSponsorshipsCtrl.$inject = ['$scope', 'Restangular'];
module.exports = DashboardAdminTabSponsorshipsCtrl;
