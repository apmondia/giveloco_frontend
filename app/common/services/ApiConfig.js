'use strict';

var apiConfig = function() {

/* =======================================================================
	Taliflo API Configuration
======================================================================= */
	var apiProxy = '/api',
		apiVersion = '/v1';

	this.API = {
		baseUrl: apiProxy + apiVersion,
		certificate: {
			purchase: apiProxy + apiVersion + '/users/certificates',
			get_token: apiProxy + apiVersion + '/certificates/get_client_token',
			redeem: apiProxy + apiVersion + '/certificates/redeem'
		},
		sponsorship: {
			create: apiProxy + apiVersion + '/sponsorships',
			withID: function (sponsorshipID) {
				return {
					resolve: apiProxy + '/sponsorships/' + sponsorshipID + '/resolve'
				};
			}
		},
		user: {
			login: apiProxy + '/user/login',
			signup: apiProxy + '/user/signup',
			logout: apiProxy + '/user/logout',
			path: apiProxy + '/user.json',
			resendConfirmation: apiProxy + apiVersion + '/users/confirmations',
			withID: function (userID) {
				return {
					updatePassword: apiProxy + '/user/' + userID + '/change_password',
					uploadImage: apiProxy + apiVersion + '/users/' + userID + '/upload_image'
				};
			}
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

apiConfig.$inject = [];
module.exports = apiConfig;
