'use strict';

function UsersProfileCauseSponsorsCtrl($rootScope, $scope, Restangular) {

/* =======================================================================
	Get Lists of Supported Causes
======================================================================= */	
	var businessList = [];
	for (var i=0; i < $scope.user.sponsors.length; i++) {
		var sponsors = Restangular.one('users', $scope.user.sponsors[i].business_id).get().$object;
		businessList.push(sponsors);	
	}
	
	$scope.sponsors = businessList;
}

UsersProfileCauseSponsorsCtrl.$inject = ['$rootScope', '$scope', 'Restangular'];
module.exports = UsersProfileCauseSponsorsCtrl;