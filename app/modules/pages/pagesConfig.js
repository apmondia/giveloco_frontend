'use strict';

function pageRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var about = {
      name: 'about',
      url: '/how-it-works',
      template: '<div about-view></div>',
      data: {
        moduleClasses: 'page',
        pageClasses: 'about',
        pageTitle: 'How it Works',
        pageDescription: 'Find your favourite cause, donate and receive vouchers of equal value that are redeemable at participating businesses.'
      }
  },
  policy = {
      name: 'policy',
      url: '/policy',
      template: '<div policy-view></div>',
      data: {
        moduleClasses: 'page',
        pageClasses: 'policy',
        pageTitle: 'Privacy Policy',
        pageDescription: 'Taliflo Privacy Policy.'
      }
  },
  terms = {
      name: 'terms',
      url: '/terms',
      template: '<div terms-view></div>',
      data: {
        moduleClasses: 'page',
        pageClasses: 'terms',
        pageTitle: 'Terms of Service',
        pageDescription: 'Taliflo Terms of Service.'
      }
  };

$stateProvider.state(about);
$stateProvider.state(policy);
$stateProvider.state(terms);

}

pageRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = pageRoutes;