'use strict';

function UsersProfileCauseSponsorshipRequestCtrl($scope, Restangular, alertService) {
  $scope.submitSponsorshipRequest = function() {
    Restangular.all('sponsorships').all('requests').post({
      cause_id: $scope.user.id
    }).then(function () {
      alertService.showSuccess('Your request has been sent to the Taliflo Community Administrator');
    }, function (status) {
      alertService.showDanger('Could not create sponsorship request.');
      console.error(status);
    });
  };
}

UsersProfileCauseSponsorshipRequestCtrl.$inject = ['$scope', 'Restangular', 'alertService'];
module.exports = UsersProfileCauseSponsorshipRequestCtrl;
