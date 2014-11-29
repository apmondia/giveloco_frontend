'use strict';

function DashboardTasksCtrl($scope) {

	$scope.profileDescriptionRequired = function() {
		return ($scope.currentUser.description === null) ? true : false;
	};
	$scope.profileSummaryRequired = function() {
		return ($scope.currentUser.summary === null) ? true : false;
	};
	$scope.addressRequired = function() {
		if ($scope.currentUser.city === null && $scope.currentUser.street_address === null) {
			return true;
		} else {
			return false;
		}
	};
	$scope.contactInfoRequired = function() {
		return ($scope.currentUser.phone === null) ? true : false;
	};
	$scope.websiteRequired = function() {
		return ($scope.currentUser.website === null) ? true : false;
	};
	$scope.billingInfoRequired = function() {
		return ($scope.currentUser.customer_id === null) ? true : false;
	};

	$scope.profileCompleted = function() {
		if (($scope.profileDescriptionRequired === true) || ($scope.profileSummaryRequired === true) || ($scope.addressRequired === true) || ($scope.contactInfoRequired === true) || ($scope.websiteRequired === true) || ($scope.billingInfoRequired === true)) {
			return false;
		} else {
			return true;
		}
	};

}

DashboardTasksCtrl.$inject = ['$scope'];
module.exports = DashboardTasksCtrl;
