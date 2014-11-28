'use strict';

function UsersProfileBusinessSupportedCausesCtrl($scope, SponsorService) {

	$scope.sponsorships = SponsorService.getSponsoredCauses($scope.user);

}

UsersProfileBusinessSupportedCausesCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileBusinessSupportedCausesCtrl;
