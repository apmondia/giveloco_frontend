window.jQuery = window.$ = require('jquery');
window._ = require('lodash');

require('angular');
require('angular-bootstrap');
require('angular-animate');
require('angular-cookies');
require('angular-file-upload');
require('angular-payments');
require('angular-resource');
require('angular-sanitize');
require('angular-scroll');
require('angular-spinner');
require('angular-touch');
require('angular-truncate');
require('angular-ui-router');
require('domready/ready');
require('gsap');
require('lodash');
require('ng-idle');
require('ng-tags-input');
require('restangular');
require('ng-parallax');

module.exports = angular.module('common',
	[
        'ui.bootstrap',
        'ui.router',
        'angularFileUpload',
        'angularPayments',
        'angularSpinner',
        'duScroll',
        'ngAnimate',
        'ngCookies',
        'ngIdle',
        'ngSanitize',
        'ngTagsInput',
        'ngTouch',
        'restangular',
				'duParallax',
        require('./components').name,
        require('./constants').name,
        require('./directives').name,
        require('./filters').name,
        require('./plugins').name,
        require('./services').name,
        require('./templates').name
	]);
