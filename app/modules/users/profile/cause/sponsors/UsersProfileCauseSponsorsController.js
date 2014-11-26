'use strict';

function UsersProfileCauseSponsorsCtrl($scope, SponsorService) {
	
	$scope.sponsors = SponsorService.getSponsors($scope.user);

}

UsersProfileCauseSponsorsCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileCauseSponsorsCtrl;