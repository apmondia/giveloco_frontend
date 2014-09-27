'use strict';

var Transactions = function($rootScope, $http, apiConfig) {

	var tranService = {

	    donation: function(data) {
			return $http({
						method: 'POST', 
						url: apiConfig.API.transaction.donation, 
						data: {transaction: data}
					}).then(function(result) {
						console.log(result);
						return result;
					});
		}

	};

	return tranService;

};

Transactions.$inject = ['$rootScope', '$http', 'apiConfig'];
module.exports = Transactions;