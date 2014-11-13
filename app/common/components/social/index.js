'use strict';

module.exports = angular.module('common.social-media-links', [])
	.directive('commonSocialMediaLinks', require('./commonSocialMediaLinksDirective'))
	.controller('CommonSocialMediaLinksCtrl', require('./CommonSocialMediaLinksController'));