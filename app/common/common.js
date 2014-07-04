window.jQuery = window.$ = require('jquery');

require('angular-bootstrap');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('gsap');
require('domready/ready');

module.exports = angular.module('common',
	[
        'ui.bootstrap',
        'ui.router',
        'ngAnimate',
        'ngResource',
        require('./components/header').name,
        require('./components/footer').name
	]);