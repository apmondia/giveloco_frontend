'use strict';

var User = function($resource) {
	return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
};

User.$inject = ['$resource'];
module.exports = User;