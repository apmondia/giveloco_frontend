'use strict';

function UsersProfileCauseSponsorsCtrl($scope, SponsorService) {

	SponsorService.getSponsors($scope.user).then(function (data) {
		$scope.sponsors = _.filter(data, function(sponsorship){
			return sponsorship.status == 'accepted';
		});
	});

}

UsersProfileCauseSponsorsCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileCauseSponsorsCtrl;
