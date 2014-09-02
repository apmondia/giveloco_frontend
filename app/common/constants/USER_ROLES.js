'use strict';

var USER_ROLES = (function() {
    return {
		all: '*',
		admin: 'admin',
		individual: 'individual',
		cause: 'cause',
		business: 'business',
		guest: 'guest'
    };
}());

USER_ROLES.$inject = [];
module.exports = USER_ROLES;