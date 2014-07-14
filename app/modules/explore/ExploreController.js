'use strict';

function ExploreCtrl($rootScope, $scope, users) {
	$scope.users = users;
}

ExploreCtrl.$inject = ['$rootScope', '$scope', 'users'];
module.exports = ExploreCtrl;