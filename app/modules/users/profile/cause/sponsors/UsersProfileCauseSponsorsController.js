'use strict';

function UsersProfileCauseSponsorsCtrl($scope, SponsorService) {

	SponsorService.getSponsors($scope.user).then(function (data) {
		$scope.sponsors = data;
	});
	
}

UsersProfileCauseSponsorsCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileCauseSponsorsCtrl;
