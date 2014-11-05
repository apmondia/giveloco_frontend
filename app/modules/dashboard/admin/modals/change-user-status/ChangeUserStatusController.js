'use strict';

function ChangeUserStatusCtrl($scope, user) {
	$scope.user = user;
}

ChangeUserStatusCtrl.$inject = ['$scope', 'user'];
module.exports = ChangeUserStatusCtrl;