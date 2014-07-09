'use strict';

var UserProvider = function($rootScope, Restangular) {

	var User = Restangular.all('users', {param: 'id'});

	return User;

};

UserProvider.$inject = ['$rootScope', 'Restangular'];
module.exports = UserProvider;

/*var UserProvider = function($rootScope, $resource) {

	// apiBaseUrl is defined in the apiConfig service
	var API_URL = $rootScope.apiBaseUrl;

	var url = API_URL + '/users/:id',
        params = {id: '@id'};

	var actions = {
		'getOne': {method:'GET', isArray: true},
		'save': {method:'POST'},
		'getAll': {method:'GET', isArray: true},
		'delete': {method:'DELETE'}
	};

	var User = $resource(url, params, actions);

	return User;

};

UserProvider.$inject = ['$rootScope', '$resource'];
module.exports = UserProvider;*/