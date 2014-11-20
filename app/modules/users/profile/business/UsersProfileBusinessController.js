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
		        }
			}
        });
	};
}

UsersProfileBusinessCtrl.$inject = ['$scope'];
module.exports = UsersProfileBusinessCtrl;