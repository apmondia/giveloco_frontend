'use strict';

var redemption = require('./json/redemptions.json'),
	transaction = require('./json/transactions.json'),
	user = require('./json/users.json'),
	voucher = require('./json/vouchers.json');

function devInit($httpBackend) {
	$httpBackend.whenGET('/api/redemption').respond(redemption);
	$httpBackend.whenGET('/api/transaction').respond(transaction);
	$httpBackend.whenGET('/api/user').respond(user);
	$httpBackend.whenGET('/api/voucher').respond(voucher);
 
	// Catch-all pass through for all other requests
	$httpBackend.whenGET(/.*/).passThrough();
	$httpBackend.whenPOST(/.*/).passThrough();
	$httpBackend.whenDELETE(/.*/).passThrough();
	$httpBackend.whenPUT(/.*/).passThrough();
}

devInit.$inject = ['$httpBackend'];
module.exports = devInit;