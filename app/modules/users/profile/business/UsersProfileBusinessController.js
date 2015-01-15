'use strict';

function UsersProfileBusinessCtrl($scope) {

/* =======================================================================
	Modals
======================================================================= */
    $scope.enterGiftCard = function(userParam) {
        $scope.usersProfileBusinessPurchaseModal.open({
        	windowClass: 'transaction-purchase',
        	backdrop: 'static',
        	resolve: {
		        user: function () {
					    return userParam;
		        },
		        sponsoredCauses: function(SponsorService) {
		        	return SponsorService.getSponsoredCauses(userParam);
		        }
			},
			controller: function($scope, user, sponsoredCauses) {
        		$scope.user = user;
        		$scope.sponsoredCauses = sponsoredCauses;
        	}
        });
	};
}

UsersProfileBusinessCtrl.$inject = ['$scope'];
module.exports = UsersProfileBusinessCtrl;
