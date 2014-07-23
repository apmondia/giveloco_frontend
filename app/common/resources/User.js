'use strict';

var UserProvider = function($rootScope, Restangular) {
	
	var userData = Restangular.all('users');

	this.getAllUsers = function() {
		return userData.getList().$object;
	};

	this.getOneUser = function(uid) {
		return Restangular.one('users', uid).get();
	};

	this.getAllUsersOfType = function(userRole) {
		return userData.getList({'role': userRole}).$object;
	};

	this.getAllFeaturedCauses = function() {
		return userData.getList({'role': 'cause', 'is_featured':'true'}).$object;
	};

	this.getAllFeaturedBusinesses = function() {
		return userData.getList({'role': 'business', 'is_featured':'true'}).$object;
	};

	return this;

};

UserProvider.$inject = ['$rootScope', 'Restangular'];
module.exports = UserProvider;