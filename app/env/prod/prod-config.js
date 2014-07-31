'use strict';

function prodConfig(ENV, AuthProvider) {
	// Auth Login Configuration
	AuthProvider.loginPath(ENV.PROD.url + 'user/sign_in.json');
}

prodConfig.$inject = ['ENV', 'AuthProvider'];
module.exports = prodConfig;