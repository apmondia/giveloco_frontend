'use strict';

function UsersProfileCauseSupportingBusinessesCtrl($rootScope, $scope, Restangular) {

/* =======================================================================
	Get Lists of Supported Causes
======================================================================= */	
	var businessList = [];
	for (var i=0; i < $scope.$parent.user.supporters.length; i++) {
		var supportingBusiness = Restangular.one('users', $scope.$parent.user.supporters[i]).get().$object;
		businessList.push(supportingBusiness);	
	}
	
	$scope.supportingBusinesses = businessList;
}

UsersProfileCauseSupportingBusinessesCtrl.$inject = ['$rootScope', '$scope', 'Restangular'];
module.exports = UsersProfileCauseSupportingBusinessesCtrl;