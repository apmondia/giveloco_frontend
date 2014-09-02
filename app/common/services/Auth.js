/*jshint camelcase: false */
'use strict';

var Auth = function($rootScope, $http, Restangular, $cookieStore, AUTH_EVENTS, alertService, apiConfig) {

	var authService = {

		signup: function(data) {
			return $http.post(apiConfig.API.paths.signup, {user:data}).then(function(user){
				$cookieStore.put('uid', user.data.uid);
				$cookieStore.put('auth_token', user.data.auth_token);
				return user;
			});
		},

		login: function(credentials) {
			return $http.post(apiConfig.API.paths.login, credentials).then(function(user){
				$cookieStore.put('uid', user.data.uid);
				$cookieStore.put('auth_token', user.data.auth_token);
				return user;
			});
		},

		isLoggedIn: function() {
			return ($cookieStore.get('auth_token')) ? true : false;
		},

		logout: function() {
			return $http.delete('user/logout').then(function() {
				$cookieStore.remove('auth_token');
				$cookieStore.remove('uid');
				$cookieStore.remove('uname');
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

	    // Complete authorization check is found in the common/common-init.js file
	    isAuthorized: function () {
	    	authService.getCurrentUser().then(function(user) {
	    		var user_token = user.auth_token;
	    		var auth_token = $cookieStore.get('auth_token');

	    		// Check if the user's API token matches the auth_token set in the browser's cookies
	    		if (auth_token === user_token) {
	    			return true;
	    		} else {
	    			return false;
	    		}
	    	});
		}

	};

	return authService;

};

Auth.$inject = ['$rootScope', '$http', 'Restangular', '$cookieStore', 'AUTH_EVENTS', 'alertService', 'apiConfig'];
module.exports = Auth;