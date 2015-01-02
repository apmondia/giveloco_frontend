'use strict';

function DeleteSponsorshipController($rootScope, $scope, Restangular, alertService) {
  $scope.confirmDeleteSponsorship = function() {
    Restangular.one('sponsorships', $scope.selectedSponsorship.id).remove()
    .then(function () {
      alertService.showSuccess('Deleted');
      $rootScope.$broadcast('sponsorshipsChanged');
      $scope.deleteSponsorshipModal.close();
    }, function () {
      alertService.showDanger('Could not delete');
      $scope.deleteSponsorshipModal.close();
    });
  };
}

DeleteSponsorshipController.$inject = ['$rootScope', '$scope','Restangular', 'alertService'];
module.exports = DeleteSponsorshipController;
