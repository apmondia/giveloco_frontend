'use strict';

function UsersAccountBillingInfoCtrl($scope, $window) {
  $scope.auth_stripe_url = $window.location.protocol + "//" + $window.location.host + "/auth/stripe";
}

UsersAccountBillingInfoCtrl.$inject = ['$scope', '$window'];
module.exports = UsersAccountBillingInfoCtrl;
