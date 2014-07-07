'use strict';

function devConfig($provide) {
	$provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}

devConfig.$inject = ['$provide'];
module.exports = devConfig;