'use strict';

var Auth = function($rootScope, $http, Restangular, $cookieStore, AUTH_EVENTS, alertService, apiConfig) {

	var authService = {

		signup: function(data) {
			return $http.post(apiConfig.API.user.signup, {user:data}).then(function(user){
				$cookieStore.put('uid', user.data.uid);
				$cookieStore.put('auth_token', user.data.auth_token);
				return user;
			});
		},

		login: function(credentials) {
			return $http.post(apiConfig.API.user.login, credentials).then(function(user){
				$cookieStore.put('uid', user.data.uid);
				$cookieStore.put('auth_token', user.data.auth_token);
				return user;
			});
		},

		isLoggedIn: function() {
			return ($cookieStore.get('auth_token')) ? true : false;
		},

		logout: function() {
			return $http.delete(apiConfig.API.user.logout).then(function() {
				$cookieStore.remove('auth_token');
				$cookieStore.remove('uid');
				localStorage.removeItem('uname');
				alertService.showAlert(AUTH_EVENTS.logoutSuccess, 'alert-success');
			});
		},

	    currentUser: null,

	    getCurrentUser: function() {
	    	var uid = $cookieStore.get('uid');
	    	return Restangular.one('users', uid).get();
	    },

	    isAuthenticated: function() {
	        return !authService.currentUser;
	    },

	    updatePassword: function(data) {
			return $http({
						method: 'PUT', 
						url: apiConfig.API.user.updatePassword, 
						data: {user: data}
					}).then(function(user) {
						console.log(user);
						return user;
					});
		}

	};

	return authService;

};

Auth.$inject = ['$rootScope', '$http', 'Restangular', '$cookieStore', 'AUTH_EVENTS', 'alertService', 'apiConfig'];
module.exports = Auth;