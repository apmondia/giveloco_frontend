/*jshint camelcase: false */
'use strict';

var AuthInterceptor = function() {
	return {
		request: function(config) {
			config.headers = config.headers || {};
			// Change this to use cookies later
			if (localStorage.auth_token) {
				config.headers['x-session-token'] = localStorage.auth_token;
			}
			return config;
		}
	};
};

AuthInterceptor.$inject = [];
module.exports = AuthInterceptor;