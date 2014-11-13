'use strict';

module.exports = function commonSocialMediaLinksView() {
	return {
		controller: 'CommonSocialMediaLinksCtrl',
		template: require('./common-social-media-links.html'),
		restrict: 'A',
		scope: true
	};
};