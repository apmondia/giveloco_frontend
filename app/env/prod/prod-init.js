'use strict';

function prodInit($rootScope, Restangular) {

	$rootScope.$broadcast('ENV_PROD');

	Restangular.setBaseUrl('http://api.taliflo.com');
	
}

prodInit.$inject = ['$rootScope'];
module.exports = prodInit;