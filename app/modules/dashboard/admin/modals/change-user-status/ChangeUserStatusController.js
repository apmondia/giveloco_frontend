'use strict';

function ChangeUserStatusCtrl($scope, user) {
	$scope.user = user;
	console.log('test');
}

ChangeUserStatusCtrl.$inject = ['$scope', 'user'];
module.exports = ChangeUserStatusCtrl;