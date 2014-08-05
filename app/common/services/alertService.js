'use strict';

var Alert = function($rootScope, $timeout) {

	var service = {
		showAlert: function(message, alertClasses) {
			$rootScope.alertVisible = true;
			$rootScope.alertMessage = message;
			$rootScope.alertClass = alertClasses;

			$timeout(function () {
	            service.hideAlert();
	        }, 3000);
		},

		hideAlert: function() {
			$rootScope.alertVisible = false;
			$rootScope.alertMessage = '';
		}
	};

	return service;
};

Alert.$inject = ['$rootScope', '$timeout'];
module.exports = Alert;