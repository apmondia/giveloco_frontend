'use strict';

function userProfileRoutes($stateProvider) {

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

userProfileRoutes.$inject = ['$stateProvider'];
module.exports = userProfileRoutes;