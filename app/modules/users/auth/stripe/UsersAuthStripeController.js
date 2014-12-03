'use strict';

function UsersAuthStripeCtrl($rootScope, $scope, $location, Restangular, $http, alertService, AUTH_EVENTS, $state) {
  $scope.in_progress = true;
  //here need to start an AJAX call to the server with the
  //stripe code

  $scope.doCallback = function () {
    var searchObject = $location.search();
    if (searchObject.code) {
      $http.get('/api/user/auth/stripe_connect/callback.json?code=' + searchObject.code )
        .success(function () {
          alertService.showAlert(AUTH_EVENTS.stripeConnected, 'alert-success');
          $state.go('account.details.view', {id:$rootScope.currentUser.id});
        })
        .error(function () {
          alertService.showAlert(AUTH_EVENTS.stripeConnectionFailed, 'alert-danger');
          $state.go('account.details.view', {id:$rootScope.currentUser.id});
        });
    } else {
      //there was an error in Stripe
    }
  };

  $scope.$on('set-current-user', function () {
    $scope.doCallback();
  });

}

UsersAuthStripeCtrl.$inject = ['$rootScope', '$scope', '$location', 'Restangular', '$http', 'alertService', 'AUTH_EVENTS', '$state'];
module.exports = UsersAuthStripeCtrl;
