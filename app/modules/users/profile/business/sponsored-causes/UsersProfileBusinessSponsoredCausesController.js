'use strict';

function UsersProfileBusinessSupportedCausesCtrl($rootScope, $scope, Restangular) {

/* =======================================================================
	Get Lists of Supported Causes
======================================================================= */
	var causeList = [];
	for (var i=0; i < $scope.user.sponsorships.length; i++) {
		if ($scope.user.sponsorships[i].status === 'accepted') {
			var supportedCause = Restangular.one('users', $scope.user.sponsorships[i].cause.id).get().$object;
			causeList.push(supportedCause);
		}
	}

	$scope.sponsorships = causeList;
}

UsersProfileBusinessSupportedCausesCtrl.$inject = ['$rootScope', '$scope', 'Restangular'];
module.exports = UsersProfileBusinessSupportedCausesCtrl;
