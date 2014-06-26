'use strict';

function pageRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var causesGrid = {
      name: 'causes',
      url: '/explore',
      template: '<div cause-grid></div>',
      data: {
        moduleClasses: 'grid',
        pageClasses: 'causes',
        pageTitle: 'Explore Causes',
        pageDescription: 'Explore Taliflo Causes and donate to receive vouchers that are redeemable at participating businesses.'
      }
  };

$stateProvider.state(causesGrid);

}

pageRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = pageRoutes;