'use strict';

function UsersProfileBusinessSupportedCausesCtrl($rootScope, $scope, Restangular) {

/* =======================================================================
	Get Lists of Supported Causes
======================================================================= */	
	var causeList = [];
	for (var i=0; i < $scope.user.supported_causes.length; i++) {
		var supportedCause = Restangular.one('users', $scope.user.supported_causes[i].to_user_id).get().$object;
		causeList.push(supportedCause);	
	}
	
	$scope.supportedCauses = causeList;
}

UsersProfileBusinessSupportedCausesCtrl.$inject = ['$rootScope', '$scope', 'Restangular'];
module.exports = UsersProfileBusinessSupportedCausesCtrl;