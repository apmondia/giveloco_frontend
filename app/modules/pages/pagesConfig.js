'use strict';

function pageRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var about = {
      name: 'about',
      url: '/how-it-works',
      template: '<div about-view></div>',
      moduleClasses: 'page',
      pageClasses: 'about',
      title: 'How it Works',
      description: 'Find your favourite cause, donate and receive vouchers of equal value that are redeemable at participating businesses.'
  };

$stateProvider.state(about);

}

pageRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = pageRoutes;