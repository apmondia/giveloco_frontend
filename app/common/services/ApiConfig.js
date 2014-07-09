'use strict';

var ApiConfig = function($rootScope) {

	var currentEnv = {
		production: function() {
			$rootScope.apiBaseUrl = 'api.taliflo.com';
		},
		development: function() {
			$rootScope.apiBaseUrl = 'api';
		}
	};

	var apiUrl = {
		// the ENV_ events are broadcasted from the app/env directories
		DEV: function() {
			$rootScope.$on('ENV_DEV', currentEnv.development);
		},
		PROD: function() {
			$rootScope.$on('ENV_PROD', currentEnv.production);
		}
	};

	apiUrl.DEV();
	apiUrl.PROD();

};

ApiConfig.$inject = ['$rootScope'];
module.exports = ApiConfig;