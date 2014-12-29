/*jshint camelcase: false */
'use strict';

function UsersAccountDetailsCtrl($rootScope, $scope, $http, apiConfig, alertService, AUTH_EVENTS) {

	$scope.confirmationSent = false;

	$scope.accountStatus = function() {
		if ($scope.currentUser.confirmed_at === null) {
			return 'unconfirmed';
		} else {
			return 'confirmed';
		}
	};
	$scope.resendInstructions = function () {
		return $http.post(apiConfig.API.user.resendConfirmation,
			{
				'format': 'json'
				}).then(function(){
			$scope.confirmationSent = true;
			alertService.showSuccess(AUTH_EVENTS.confirmationResent);
		});
	};

}

UsersAccountDetailsCtrl.$inject = ['$rootScope', '$scope', '$http', 'apiConfig', 'alertService', 'AUTH_EVENTS'];
module.exports = UsersAccountDetailsCtrl;
