'use strict';

function UsersProfileBusinessCtrl($scope) {

/* =======================================================================
	Modals
======================================================================= */
    $scope.purchaseGiftCard = function(userParam) {
        $scope.usersProfileBusinessPurchaseModal.open({
        	windowClass: 'transaction-purchase',
        	resolve: {
		        user: function () {
					return userParam;
		        },
		        sponsorships: function(SponsorService) {
		        	return SponsorService.getSponsorships(userParam);
		        }
			},
			controller: function($scope, user, sponsorships) {
        		$scope.user = user;
        		$scope.sponsorships = sponsorships;
        	}
        });
	};
}

UsersProfileBusinessCtrl.$inject = ['$scope'];
module.exports = UsersProfileBusinessCtrl;