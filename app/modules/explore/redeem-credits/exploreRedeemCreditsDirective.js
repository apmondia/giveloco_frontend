'use strict';

module.exports = function exploreRedeemCreditsDirective() {
	return {
		controller: 'ExploreRedeemCreditsCtrl',
		template: require('./explore-redeem-credits.html'),
		restrict: 'A',
		scope: true
	};
};