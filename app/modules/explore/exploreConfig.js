'use strict';

function exploreRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var exploreBusinesses = {
      name: 'exploreBusinesses',
      url: '/claim',
      template: '<div explore-businesses></div>',
      data: {
        moduleClasses: 'explore',
        pageClasses: 'businesses',
        pageTitle: 'Collect Your Vouchers',
        pageDescription: 'Explore Businesses on Taliflo and claim vouchers that can be redeemed in store.'
      }
  },
  exploreCauses = {
      name: 'exploreCauses',
      url: '/explore-causes',
      template: '<div explore-causes></div>',
      data: {
        moduleClasses: 'explore',
        pageClasses: 'causes',
        pageTitle: 'Explore Causes',
        pageDescription: 'Explore Causes on Taliflo and donate to receive vouchers that are redeemable at participating businesses.'
      }
  };

$stateProvider.state(exploreBusinesses);
$stateProvider.state(exploreCauses);

}

exploreRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = exploreRoutes;