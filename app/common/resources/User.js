'use strict';

var UserProvider = function($rootScope, Restangular) {
	
	var userData = Restangular.all('users');

	this.getAllUsers = function() {
		return userData.getList().$object;
	};

	this.getOneUser = function(uid) {
		return Restangular.one('users', uid).get();
	};

	this.getAllUsersOfType = function(userType) {
		return userData.getList({'type': userType}).$object;
	};

	this.getAllFeaturedCauses = function() {
		return userData.getList({'type': 'cause', 'is_featured':'true'}).$object;
	};

	this.getAllFeaturedBusinesses = function() {
		return userData.getList({'type': 'business', 'is_featured':'true'}).$object;
	};

	return this;

};

UserProvider.$inject = ['$rootScope', 'Restangular'];
module.exports = UserProvider;