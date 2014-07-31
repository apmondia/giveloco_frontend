'use strict';

function ExploreCausesCtrl($rootScope, $scope, $timeout, Restangular) {
	// Get all users from server
	var users = Restangular.all('users');

	// Populate List of Causes
	users.getList().then(function(users) {
		$scope.causes = [];
		angular.forEach(users, function(user) {
			if (user.role === 'cause') {
				$scope.causes.push(user);
			}
		});
	});
}

ExploreCausesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'Restangular'];
module.exports = ExploreCausesCtrl;