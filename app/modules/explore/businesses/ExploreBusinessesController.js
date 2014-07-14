'use strict';

function ExploreBusinessesCtrl($rootScope, $scope, User) {
	$scope.users = User.getAllUsers();
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope', 'User'];
module.exports = ExploreBusinessesCtrl;