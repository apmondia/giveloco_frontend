'use strict';

function UsersProfileBusinessSupportedCausesCtrl($scope, SponsorService) {

	SponsorService.getSponsoredCauses($scope.user).then(function (data) {
		$scope.sponsorships = data;
	});

}

UsersProfileBusinessSupportedCausesCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileBusinessSupportedCausesCtrl;
