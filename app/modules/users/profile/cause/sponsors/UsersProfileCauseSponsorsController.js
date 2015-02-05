'use strict';

function UsersProfileCauseSponsorsCtrl($scope, SponsorService) {

	$scope.sponsors = [];

	function updateSponsors(user) {
		SponsorService.getSponsors(user).then(function (data) {
			$scope.sponsors = _.filter(data, function(sponsorship){
				return sponsorship.status == 'accepted';
			});
		});
	}
	
	$scope.$on('set-profile-user', function (event, user) {
		updateSponsors(user);
	});

	if ($scope.user && $scope.user.id) {
		updateSponsors($scope.user);
	}

}

UsersProfileCauseSponsorsCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileCauseSponsorsCtrl;
