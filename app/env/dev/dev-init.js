'use strict';

function devInit($rootScope, Restangular) {

	$rootScope.$broadcast('ENV_DEV');

	Restangular.setBaseUrl('http://localhost:3000/');
}

devInit.$inject = ['$rootScope', 'Restangular'];
module.exports = devInit;