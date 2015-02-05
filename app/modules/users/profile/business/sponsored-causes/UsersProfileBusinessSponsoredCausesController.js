'use strict';

function UsersProfileBusinessSupportedCausesCtrl($scope, SponsorService) {

	$scope.sponsorships = [];

	function updateSponsorships(user) {
		SponsorService.getSponsoredCauses(user).then(function (data) {
			$scope.sponsorships = data;
		});
	}

	$scope.$on('set-profile-user', function (event, user) {
		updateSponsorships(user);
	});

	if ($scope.user && $scope.user.id) {
		updateSponsorships($scope.user);
	}


}

UsersProfileBusinessSupportedCausesCtrl.$inject = ['$scope', 'SponsorService'];
module.exports = UsersProfileBusinessSupportedCausesCtrl;
