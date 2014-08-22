'use strict';

// Plugin origin: https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination

module.exports = angular.module('common.plugins.pagination', [])
    .directive('dirPaginate', require('./dirPaginate.js'))
    .directive('dirPaginationControls', require('./dirPaginationControls.js'))
    .filter('itemsPerPage', require('./itemsPerPage.js'))
    .service('paginationService', require('./paginationService.js'));