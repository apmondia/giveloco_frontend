'use strict';

var AuthService = function(User) {
	return User;
};

AuthService.$inject = ['User'];
module.exports = AuthService;