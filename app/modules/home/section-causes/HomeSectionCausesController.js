'use strict';

function HomeSectionCausesCtrl($rootScope, $scope, Restangular, User) {

	$scope.users = User.getAllUsers();

	console.log($scope.users);

//	ng-if="user.type == 'cause'" 
	
}

HomeSectionCausesCtrl.$inject = ['$rootScope', '$scope', 'Restangular', 'User'];
module.exports = HomeSectionCausesCtrl;