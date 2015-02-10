'use strict';

function UsersAuthCompletePasswordResetCtrl($rootScope, $scope, $state, Restangular, alertService, $stateParams) {
  $scope.token = $stateParams.reset_password_token;

  $scope.confirmResetPassword = function() {

    if ($scope.completePasswordResetForm.$valid) {
      var user = Restangular.one('users');
      user.singleOne = true;
      user.customPUT({
        reset_password_token: $scope.token,
        password: $scope.password,
        password_confirmation: $scope.password_confirmation
      }, 'password').then(
        function () {
          alertService.showSuccess("Your password has been reset.");
          $state.go('auth.login');
        },
        function () {
          alertService.showDanger("We couldn't reset your password.");
        }
      );
    }
  };
}

UsersAuthCompletePasswordResetCtrl.$inject = ['$rootScope', '$scope', '$state', 'Restangular', 'alertService', '$stateParams'];
module.exports = UsersAuthCompletePasswordResetCtrl;
