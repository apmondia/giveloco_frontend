'use strict';

function devConfig(ENV, AuthProvider) {
	// Auth Login Configuration
	AuthProvider.loginPath(ENV.DEV.url + 'user/sign_in.json');
}

devConfig.$inject = ['ENV', 'AuthProvider'];
module.exports = devConfig;