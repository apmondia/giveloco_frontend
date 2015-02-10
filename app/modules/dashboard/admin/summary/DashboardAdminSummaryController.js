'use strict';

function DashboardAdminSummaryCtrl($scope, apiConfig, Restangular, alertService) {
    $scope.certificateDownloadLink = apiConfig.API.user.sponsorships.certificates.csv;

    function refreshReport() {
      var br = Restangular.one('business_reports');
      br.singleOne = true;
      br.get().then(function (data) {
        $scope.adminReport = data;
      },
      function () {
        alertService.showDanger("Could not retrieve the aggregate report.")
      });
    }

    refreshReport();

    $scope.$on('set-all-users', function () {
      refreshReport();
    });

}

DashboardAdminSummaryCtrl.$inject = ['$scope', 'apiConfig', 'Restangular', 'alertService'];
module.exports = DashboardAdminSummaryCtrl;
