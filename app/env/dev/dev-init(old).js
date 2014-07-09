'use strict';

var redemptions = require('./json/redemptions.json'),
	transactions = require('./json/transactions.json'),
	users = require('./json/users.json'),
	vouchers = require('./json/vouchers.json');

function devInit($rootScope, $httpBackend, Restangular) {

	$rootScope.$broadcast('ENV_DEV');

	// apiBaseUrl is located in the apiConfig service
	// var API_URL = $rootScope.apiBaseUrl;

	Restangular.setBaseUrl('/api');
	console.log('baseUrl set');
	var API_URL = '/api';

	$httpBackend.whenGET(API_URL + '/redemption').respond(redemptions);
	$httpBackend.whenGET(API_URL + '/transaction').respond(transactions);
	$httpBackend.whenGET(API_URL + '/users').respond(users);
	$httpBackend.whenGET(API_URL + '/voucher').respond(vouchers);

	$httpBackend.whenGET(/\/users\/\d+/).respond(users);
 
	// Catch-all pass through for all other requests
	$httpBackend.whenGET(/.*/).passThrough();
	$httpBackend.whenPOST(/.*/).passThrough();
	$httpBackend.whenDELETE(/.*/).passThrough();
	$httpBackend.whenPUT(/.*/).passThrough();
}

devInit.$inject = ['$rootScope', '$httpBackend', 'Restangular'];
module.exports = devInit;