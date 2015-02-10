'use strict';

function DashboardAdminSummaryCtrl($scope, apiConfig) {
    $scope.certificateDownloadLink = apiConfig.API.user.sponsorships.certificates.csv;
}

DashboardAdminSummaryCtrl.$inject = ['$scope', 'apiConfig'];
module.exports = DashboardAdminSummaryCtrl;
