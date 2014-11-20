'use strict';

function UsersProfileCauseSponsorshipRequestCtrl($scope, user) {
	$scope.user = user;
}

UsersProfileCauseSponsorshipRequestCtrl.$inject = ['$scope', 'user'];
module.exports = UsersProfileCauseSponsorshipRequestCtrl;