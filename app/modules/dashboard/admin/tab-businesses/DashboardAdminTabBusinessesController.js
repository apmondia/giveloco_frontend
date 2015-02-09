'use strict';

function DashboardAdminTabBusinessesCtrl($scope) {
  $scope.deactivateUser = function(user) {
    var original = user.is_activated;
    user.is_activated = false;
    user.save().then(function () {
      //alert("Deactivated user!");
    }, function () {
      //alert("Could NOT deactivate user!");
      user.is_activated = original;
    });
  };

  $scope.activateUser = function(user) {
    var original = user.is_activated;
    user.is_activated = true;
    user.save().then(function () {
      //alert("Activated user");
    }, function () {
      //alert("Could not activate user");
      user.is_activated = original;
    });
  };
}

DashboardAdminTabBusinessesCtrl.$inject = ['$scope'];
module.exports = DashboardAdminTabBusinessesCtrl;
