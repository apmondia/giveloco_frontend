'use strict';

function ExploreCausesCtrl($rootScope, $scope, $timeout, Restangular) {
	// Get all users from server
	var users = Restangular.all('users');

	$scope.loading = true;
	// Filter users to populate list of Causes
	users.getList().then(function(user) {
        $scope.causes = _.filter(user, function(user){
            return user.role === 'cause';
        });
        $scope.loading = false;
    });
}

ExploreCausesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'Restangular'];
module.exports = ExploreCausesCtrl;