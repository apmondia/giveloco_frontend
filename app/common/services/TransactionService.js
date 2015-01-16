'use strict';

var Transactions = function($http, apiConfig) {

	var tranService = {

	    purchaseCertificate: function(data) {
				return $http.post(apiConfig.API.certificate.purchase, data);
			},

			getCertificates: function(user) {
				return $http.get(apiConfig.API.user.withID(user.id).sponsorships_certificates);
			}

	};

	return tranService;

};

Transactions.$inject = ['$http', 'apiConfig'];
module.exports = Transactions;
