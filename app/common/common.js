window.jQuery = window.$ = require('jquery');
window._ = require('lodash');
// var braintree = require('https://js.braintreegateway.com/v2/braintree.js');

require('angular');
require('angular-bootstrap');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-payments');
require('angular-resource');
require('angular-sanitize');
require('angular-truncate');
require('angular-file-upload');
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