'use strict';

function TransactionsCtrl($scope, user) {
	$scope.user = user;
}

TransactionsCtrl.$inject = ['$scope', 'user'];
module.exports = TransactionsCtrl;