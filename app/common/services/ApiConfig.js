'use strict';

var apiConfig = function() {

/* =======================================================================
	GiveLoco API Configuration
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
				var json = apiProxy + apiVersion + '/users/' + userID + '/sponsorships/certificates';
				return {
					sponsorships_certificates: json,
					sponsorships_certificates_csv: json + '/csv',
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
