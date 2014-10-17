'use strict';

module.exports = angular.module('explore.redeemCredits', [])
	.directive('exploreRedeemCredits', require('./exploreRedeemCreditsDirective'))
	.controller('ExploreRedeemCreditsCtrl', require('./ExploreRedeemCreditsController'));