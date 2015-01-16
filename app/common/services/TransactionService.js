'use strict';

var Transactions = function($http, apiConfig, $cookieStore) {

	var tranService = {

	    purchaseCertificate: function(data) {
				return $http.post(apiConfig.API.certificate.purchase, data);
			},

			getCertificates: function(user) {
				return $http.get(apiConfig.API.user.withID(user.id).sponsorships_certificates);
			},

			getCertificateCSVDownloadLink: function(user) {
				return apiConfig.API.user.withID(user.id).sponsorships_certificates_csv +
					"?session_token="+$cookieStore.get('auth_token');
			}

	};

	return tranService;

};

Transactions.$inject = ['$http', 'apiConfig', '$cookieStore'];
module.exports = Transactions;
