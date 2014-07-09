'use strict';

function devConfig(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://localhost:3000/');
}

devConfig.$inject = ['RestangularProvider'];
module.exports = devConfig;