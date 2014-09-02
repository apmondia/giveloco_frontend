'use strict';

var ApiConfig = function($cookieStore) {
	
/* =======================================================================
	Taliflo API Configuration
======================================================================= */
	var apiProxy = '/api',
		apiVersion = '/v1',
		userID = $cookieStore.get('uid');

	this.API = {
		paths: {
			baseUrl: apiProxy + apiVersion,
			login: apiProxy + 'user/login',
			signup: apiProxy + 'user/signup',
			currentUser: apiProxy + apiVersion + '/users/' + userID
		}
	};

	return this;
};

ApiConfig.$inject = ['$cookieStore'];
module.exports = ApiConfig;