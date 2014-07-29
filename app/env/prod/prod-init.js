'use strict';

function prodInit($rootScope, Restangular, apiConfig) {

	$rootScope.$broadcast('ENV_PROD');

	Restangular.setBaseUrl(apiConfig.API.prod);
	
}

prodInit.$inject = ['$rootScope', 'Restangular', 'apiConfig'];
module.exports = prodInit;