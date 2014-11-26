'use strict';

function UsersProfileBusinessSupportedCausesCtrl($scope, SponsorService) {

	$scope.sponsorships = SponsorService.getSponsorships($scope.user);

}

UsersProfileBusinessSupportedCausesCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileBusinessSupportedCausesCtrl;
