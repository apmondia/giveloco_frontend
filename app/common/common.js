window.jQuery = window.$ = require('jquery');
window._ = require('lodash');

require('angular');
require('angular-bootstrap');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('angular-truncate');
require('angular-file-upload');
require('ng-tags-input');
require('ng-idle');
require('lodash');
require('restangular');
require('gsap');
require('domready/ready');

module.exports = angular.module('common',
	[
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'ngCookies',
        'ngSanitize',
        'restangular',
        'ngTagsInput',
        'angularFileUpload',
        'ngIdle',
        require('./components/header').name,
        require('./components/footer').name,
        require('./constants').name,
        require('./directives').name,
        require('./plugins').name,
        require('./resources').name,
        require('./services').name,
        require('./templates').name
	]);