'use strict';

function UsersProfileCauseSponsorsCtrl($scope, SponsorService) {

	$scope.$on('set-profile-user', function (event, user) {
		SponsorService.getSponsors(user).then(function (data) {
			$scope.sponsors = _.filter(data, function(sponsorship){
				return sponsorship.status == 'accepted';
			});
		});
	});

}

UsersProfileCauseSponsorsCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileCauseSponsorsCtrl;
