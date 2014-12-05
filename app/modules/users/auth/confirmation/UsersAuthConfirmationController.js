'use strict';

function UsersAuthConfirmationCtrl($location, alertService, Auth, $state) {
  var searchObject = $location.search();
  var alertType = 'alert-danger';
  if (searchObject.status === 'success') {
    alertType = 'alert-success';
  }
  alertService.showAlert(searchObject.message, alertType);
  //if user signed in, then show them their dashboard.  Else login
  if (Auth.isLoggedIn()) {
    $state.go('home');
  } else {
    $state.go('auth.login');
  }
}

UsersAuthConfirmationCtrl.$inject = ['$location','alertService','Auth', '$state'];
module.exports = UsersAuthConfirmationCtrl;
