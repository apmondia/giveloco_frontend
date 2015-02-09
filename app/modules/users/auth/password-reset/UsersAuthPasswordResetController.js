'use strict';

function UsersAuthPasswordResetCtrl($rootScope, $scope, $state, Restangular, alertService) {

	$scope.resetPassword = function() {

		if ($scope.PasswordResetForm.$valid) {
			var user = Restangular.one('users')
			user.singleOne = true;
			user.customPOST({email: $scope.user.email }, 'password').then(
				function () {
					alertService.showSuccess("We've sent you a password reset email.");
					$state.go('auth.login');
				},
				function () {
					alertService.showDanger("We couldn't reset your password.");
				}
			);

		// 	Restangular.all('user').customPOST({
		// 		{ email: $scope.PasswordResetForm.email }, 'password'
		// 	}).then(function () {
		// 		alertService.showSuccess("We've sent you a password reset email.");
		// 		//$state.go('home');
		// 	}, function () {
		// 		alertService.showDanger("Could not reset your password.");
		// 	});
		}
	};

}

UsersAuthPasswordResetCtrl.$inject = ['$rootScope', '$scope', '$state', 'Restangular', 'alertService'];
module.exports = UsersAuthPasswordResetCtrl;
