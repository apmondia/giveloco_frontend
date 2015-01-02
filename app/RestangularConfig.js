'use strict';

function restangularConfig(RestangularProvider) {
  RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
}

restangularConfig.$inject = ['RestangularProvider'];
module.exports = restangularConfig;
