'use strict';

function prodInit($rootScope, Restangular, apiConfig, ENV, $window) {

	$rootScope.$broadcast('ENV_PROD');
	$rootScope.serverUrl = ENV.PROD.serverUrl;
/* =======================================================================
	Restangular BaseURL Config
======================================================================= */
	Restangular.setBaseUrl(apiConfig.API.baseUrl);

/* =======================================================================
	Stripe Configuration
======================================================================= */
	$window.Stripe.setPublishableKey(apiConfig.Stripe.PROD.public_key);
	
}

prodInit.$inject = ['$rootScope', 'Restangular', 'apiConfig', 'ENV', '$window'];
module.exports = prodInit;