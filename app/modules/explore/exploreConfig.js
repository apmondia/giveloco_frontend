'use strict';

function exploreRoutes($stateProvider) {

    var explore = {
            name: 'explore',
            abstract: true,
            url: '/explore',
            template: '<div ui-view></div>',
            controller:'ExploreCtrl'
        },
        exploreBusinesses = {
            name: 'explore.businesses',
            url: '/businesses',
            template: '<div explore-businesses></div>',
            data: {
                moduleClasses: 'explore',
                pageClasses: 'businesses',
                pageTitle: 'Collect Your Vouchers',
                pageDescription: 'Explore Businesses on Taliflo and donate to their supported causes and be rewarded with store credit.'
            }
        },
        exploreCauses = {
            name: 'explore.causes',
            url: '/causes',
            template: '<div explore-causes></div>',
            data: {
                moduleClasses: 'explore',
                pageClasses: 'causes',
                pageTitle: 'Explore Causes',
                pageDescription: 'Explore Causes on Taliflo and donate to receive store credit that can be redeemed at the cause\'s sponsors.'
            }
        },
        redeemCredits = {
            name: 'explore.redeem',
            url: '/redeemable',
            template: '<div explore-redeem-credits></div>',
            data: {
                moduleClasses: 'explore',
                pageClasses: 'redeem-credits',
                pageTitle: 'Redeem Credits',
                pageDescription: 'Choose businesses on Taliflo in which to redeem your store credit.'
            }
        };

    $stateProvider.state(explore);
    $stateProvider.state(exploreBusinesses);
    $stateProvider.state(exploreCauses);
    $stateProvider.state(redeemCredits);

}

exploreRoutes.$inject = ['$stateProvider'];
module.exports = exploreRoutes;