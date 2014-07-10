'use strict';

var UserProvider = function($rootScope, Restangular) {

	var userData = Restangular.all('users');

	this.getAllUsers = function() {
		return userData.getList().$object;
	};

	this.getOneUser = function(uid) {
		return Restangular.one('users', uid).get();
	};

	return this;

};

UserProvider.$inject = ['$rootScope', 'Restangular'];
module.exports = UserProvider;