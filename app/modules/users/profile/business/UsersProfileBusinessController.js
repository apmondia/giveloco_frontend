'use strict';

function UsersProfileBusinessCtrl($scope) {

/* =======================================================================
	Modals
======================================================================= */
    $scope.purchaseGiftCard = function(userParam) {
        Stripe.setPublishableKey(userParam.publishable_key);
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
