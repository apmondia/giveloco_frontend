'use strict';

function prodInit($rootScope, Restangular) {

	$rootScope.$broadcast('ENV_PROD');

	Restangular.setBaseUrl(apiConfig.API.prod);
	
}

prodInit.$inject = ['$rootScope'];
module.exports = prodInit;