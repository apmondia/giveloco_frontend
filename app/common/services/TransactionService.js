'use strict';

var Transactions = function($rootScope, $http, apiConfig) {

	var tranService = {

	    donation: function(data) {
			return $http.post(apiConfig.API.transaction.donation, data).then(function(result){
				console.log(result.data);
				return result;
			});
		}

	};

	return tranService;

};

Transactions.$inject = ['$rootScope', '$http', 'apiConfig'];
module.exports = Transactions;