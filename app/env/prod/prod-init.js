'use strict';

function prodInit($rootScope, Restangular) {

	$rootScope.$broadcast('ENV_PROD');

	Restangular.setBaseUrl('api.taliflo.com');
	
}

prodInit.$inject = ['$rootScope'];
module.exports = prodInit;