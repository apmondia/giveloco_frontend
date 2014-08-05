'use strict';

var Auth = function($rootScope, $http) {

	var loginPath = 'api/user/login';

	this.login = function(credentials) {
		return $http.post(loginPath, {email: credentials.email, password: credentials.password});
	};

	return this;

};

Auth.$inject = ['$rootScope', '$http'];
module.exports = Auth;