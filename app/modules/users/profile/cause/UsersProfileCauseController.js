'use strict';

function UsersProfileCauseCtrl($rootScope, $scope, Auth, alertService, SponsorService) {

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
