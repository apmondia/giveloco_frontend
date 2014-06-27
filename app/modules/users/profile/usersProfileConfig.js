'use strict';

function userProfileRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var profileBusiness = {
      name: 'profileBusiness',
      url: '/user/business/id/profile',
      template: '<div users-profile-business></div>',
      data: {
        moduleClasses: 'users profile',
        pageClasses: 'business',
        pageTitle: 'Sign Up',
        pageDescription: 'Profile Page for Businesses'
      }
  },
  profileCause = {
      name: 'profileCause',
      url: '/user/cause/id/profile',
      template: '<div users-profile-cause></div>',
      data: {
        moduleClasses: 'users profile',
        pageClasses: 'cause',
        pageTitle: 'Profile',
        pageDescription: 'Profile Page for Causes'
      }
  };

$stateProvider.state(profileBusiness);
$stateProvider.state(profileCause);

}

userProfileRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = userProfileRoutes;