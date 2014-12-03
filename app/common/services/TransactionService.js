'use strict';

var Transactions = function($http, apiConfig) {

	var tranService = {

	    purchaseCertificate: function(data) {
			return $http.post(apiConfig.API.certificate.purchase, data).then(function(result){
				console.log(result.data);
				return result;
			});
		}

	};

	return tranService;

};

Transactions.$inject = ['$http', 'apiConfig'];
module.exports = Transactions;
