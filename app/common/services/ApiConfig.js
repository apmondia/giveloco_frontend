'use strict';

var apiConfig = function($cookieStore) {
	
/* =======================================================================
	Taliflo API Configuration
======================================================================= */
	var apiProxy = '/api',
		apiVersion = '/v1',
		userID = $cookieStore.get('uid');

	this.API = {
		baseUrl: apiProxy + apiVersion,
		transaction: {
			donation: apiProxy + apiVersion + '/transactions/donation',
			pledge: apiProxy + apiVersion + '/transactions',
			redemption: apiProxy + apiVersion + '/transactions',
			get_token: apiProxy + apiVersion + '/transactions/client_token'
		},
		user: {
			login: apiProxy + '/user/login',
			signup: apiProxy + '/user/signup',
			logout: apiProxy + '/user/logout',
			updatePassword: apiProxy + '/user/' + userID + '/change_password',
			currentUser: apiProxy + apiVersion + '/users/' + userID,
			uploadImage: apiProxy + apiVersion + '/users/' + userID + '/upload_image',
			deleteImage: apiProxy + apiVersion + '/users/' + userID + '/delete_image'
		}
	};

	this.Stripe = {
		DEV: {
			public_key: 'pk_test_MBnCYXpbwBkIjjjpIKz6lSud'
		},
		PROD: {
			public_key: 'pk_live_HGECFVdMKGneyKozG9g2Fnxn'
		}
	};

	return this;
};

apiConfig.$inject = ['$cookieStore'];
module.exports = apiConfig;