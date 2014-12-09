'use strict';

var Auth = function($rootScope, $http, Restangular, $cookieStore, AUTH_EVENTS, alertService, apiConfig) {

	var authService = {

		setBasicUserData: function(user) {
			$cookieStore.put('uid', user.data.id);
			$cookieStore.put('auth_token', user.data.auth_token);
			//Remove this
			$rootScope.currentRole = user.data.role;
			//setBasicUserData only occurs at signin and login, so trigger broadcast.
			authService.refreshCurrentUser(function () {
				$rootScope.$broadcast('logged-in');
			});
		},

		updateCurrentUser: function(user){
			$rootScope.currentUser = user;
			$rootScope.currentUserName = user.first_name;
			localStorage.setItem('uname', user.first_name);
			$rootScope.$broadcast('set-current-user', $rootScope.currentUser);
		},

		signup: function(data) {
			return $http.post(apiConfig.API.user.signup, {user:data}).then(function(user){
				authService.setBasicUserData(user);
				return user;
			});
		},

		login: function(credentials) {
			return $http.post(apiConfig.API.user.login, credentials).then(function(user){
				authService.setBasicUserData(user);
				return user;
			});
		},

		isLoggedIn: function() {
			return !angular.isUndefined($rootScope.currentUser) && $rootScope.currentUser !== null;//($cookieStore.get('auth_token')) ? true : false;
		},

		logout: function() {
			return $http.delete(apiConfig.API.user.logout).then(function() {
				$cookieStore.remove('auth_token');
				$cookieStore.remove('uid');
				localStorage.removeItem('uname');
				$rootScope.currentRole = null;
				$rootScope.currentUser = null;
				alertService.showAlert(AUTH_EVENTS.logoutSuccess, 'alert-success');
			});
		},

		refreshCurrentUser: function (callback) {
			var uid = $cookieStore.get('uid');
			Restangular.one('users', uid).get().then(function (userData) {
				authService.updateCurrentUser(userData);
				if (angular.isFunction(callback)) {
					callback(userData);
				}
			});
		},

		setCurrentUser: function () {
			if (angular.isUndefined($rootScope.currentUser) && !angular.isUndefined($cookieStore.get('uid'))) {
				authService.refreshCurrentUser();
			} else {
				$rootScope.$broadcast('set-current-user', $rootScope.currentUser);
			}
		},

		getCurrentUser: function (callback) {
			if (angular.isUndefined($rootScope.currentUser)) {
				authService.refreshCurrentUser(callback);
			} else if (angular.isFunction(callback)) {
				callback($rootScope.currentUser);
			}
		},

	    isAuthenticated: function() {
	        return !authService.currentUser;
	    },

	    updatePassword: function(data) {
			return $http({
						method: 'PUT',
						url: apiConfig.API.user.withID(data.id).updatePassword,
						data: {user: data}
					}).then(function(user) {
						return user;
					});
		}

	};

	return authService;

};

Auth.$inject = ['$rootScope', '$http', 'Restangular', '$cookieStore', 'AUTH_EVENTS', 'alertService', 'apiConfig'];
module.exports = Auth;
