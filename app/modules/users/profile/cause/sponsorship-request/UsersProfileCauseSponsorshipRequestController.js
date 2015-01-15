'use strict';

function UsersProfileCauseSponsorshipRequestCtrl($rootScope, $scope, Restangular, alertService) {
  $scope.submitSponsorshipRequest = function() {
    Restangular.all('sponsorships').post({
      business_id: $scope.currentUser.id,
      cause_id: $scope.user.id
    }).then(function () {
      alertService.showSuccess('Your request has been sent to the Taliflo Community Administrator');
      $scope.usersProfileSponsorshipRequestModal.close();
      $rootScope.$broadcast('sponsorships-changed');
    }, function (status) {
      alertService.showDanger('Could not create sponsorship request.');
      console.error(status);
      $scope.usersProfileSponsorshipRequestModal.close();
    });
  };
}

UsersProfileCauseSponsorshipRequestCtrl.$inject = ['$rootScope', '$scope', 'Restangular', 'alertService'];
module.exports = UsersProfileCauseSponsorshipRequestCtrl;
