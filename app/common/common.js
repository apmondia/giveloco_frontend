window.jQuery = window.$ = require('jquery');
window._ = require('lodash');

require('angular');
require('angular-bootstrap');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-file-upload');
require('angular-payments');
require('angular-resource');
require('angular-sanitize');
require('angular-spinner');
require('angular-truncate');
// require('angular-utils-pagination');
require('domready/ready');
require('gsap');
require('lodash');
require('ng-idle');
require('ng-tags-input');
require('restangular');

module.exports = angular.module('common',
	[
        'ui.bootstrap',
        'ui.router',
        'angularFileUpload',
        'angularPayments',
        'angularSpinner',
        // 'angularUtils.directives.dirPagination',
        'ngAnimate',
        'ngCookies',
        'ngIdle',
        'ngSanitize',
        'ngTagsInput',
        'restangular',
        require('./components/header').name,
        require('./components/footer').name,
        require('./constants').name,
        require('./directives').name,
        require('./filters').name,
        require('./plugins').name,
        require('./services').name,
        require('./templates').name
	]);