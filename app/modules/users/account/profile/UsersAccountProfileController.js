/*jshint camelcase: false */
'use strict';

function UsersAccountProfileCtrl($scope, $state, Restangular) {

  function refreshProfileUser() {
    Restangular.one('users', $state.params["id"]).get().then(function (user) {
      $scope.user = user;
      //console.debug("User: ", user);
      $scope.$broadcast('set-profile-user', user);
    });
  }

  $scope.$on('refresh-profile-user', function(event) {
      refreshProfileUser();
  });

  refreshProfileUser();

}

UsersAccountProfileCtrl.$inject = ['$scope', '$state', 'Restangular'];
module.exports = UsersAccountProfileCtrl;
