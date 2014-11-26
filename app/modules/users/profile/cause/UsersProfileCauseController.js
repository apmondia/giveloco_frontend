'use strict';

function UsersProfileCauseCtrl($scope) {
	
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

UsersProfileCauseCtrl.$inject = ['$scope'];
module.exports = UsersProfileCauseCtrl;