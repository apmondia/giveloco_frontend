'use strict';

function UsersProfileCauseCtrl($rootScope, $scope, Auth, alertService, SponsorService) {

	$scope.updateSponsorships = function () {
		SponsorService.getSponsoredCauses($rootScope.currentUser).then(function (data) {
			$rootScope.sponsorships = data;
		}, function () {
			alertService.showDanger("Could not retrieve list of sponsorships");
		});
	};

	$rootScope.$on('set-current-user', function (event, user) {
		if (!$rootScope.sponsorships) {
			//load up here
			$scope.updateSponsorships();
		}
	});

	$rootScope.$on('sponsorships-changed', function (event) {
		$scope.updateSponsorships();
	});

	Auth.setCurrentUser();

	$scope.isSponsoring = function(user) {
		if (!user.id) {
			return false;
		}
		var result = false;
		angular.forEach($rootScope.sponsorships, function (value) {
			if (value.cause.id == user.id) {
				result = true;
			}
		});
		return result;
	};


/* =======================================================================
	Modals
======================================================================= */
    $scope.sponsorCause = function(userParam) {
        $scope.usersProfileSponsorshipRequestModal.open({
        	windowClass: 'sponsor-cause',
        	resolve: {
		        user: function () {
					return userParam;
		        }
			}
        });
	};
}

UsersProfileCauseCtrl.$inject = ['$rootScope', '$scope', 'Auth', 'alertService', 'SponsorService'];
module.exports = UsersProfileCauseCtrl;
