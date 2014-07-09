'use strict';

function devInit($rootScope) {

	$rootScope.$broadcast('ENV_DEV');
}

devInit.$inject = ['$rootScope'];
module.exports = devInit;