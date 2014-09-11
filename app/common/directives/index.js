'use strict';

module.exports = angular.module('common.directives', [
		require('./ajaxSpinner').name
	])
	.directive('autoFocus', require('./autoFocus.js'))
	.directive('passwordEquals', require('./passwordEquals.js'))
	.directive('showFormErrors', require('./showFormErrors.js'))
	.directive('systemNotifications', require('./systemNotifications.js'));