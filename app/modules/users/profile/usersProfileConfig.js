'use strict';

// NOTE: Specifying the Controller is required for "resolve" to work correctly.

function userProfileRoutes($stateProvider) {

  var profileBusiness = {
      name: 'profileBusiness',
      url: '/users/business/:id',
      template: '<div users-profile-business></div>',
      controller: 'UsersProfileCtrl',
      data: {
        moduleClasses: 'users profile',
        pageClasses: 'business',
        pageTitle: 'Profile',
        pageDescription: 'Profile Page for Businesses'
      },
      resolve: {
        user: function(User, Restangular, $stateParams){
          var uid = $stateParams.id;
          console.log(uid);
          return User.getOneUser(uid);
        }
      }
  },
  profileCause = {
      name: 'profileCause',
      url: '/users/cause/:id',
      template: '<div users-profile-cause></div>',
      controller: 'UsersProfileCtrl',
      data: {
        moduleClasses: 'users profile',
        pageClasses: 'cause',
        pageTitle: 'Profile',
        pageDescription: 'Profile Page for Causes'
      },
      resolve: {
        user: function(User, Restangular, $stateParams){
          var uid = $stateParams.id;
          return User.getOneUser(uid);
        }
      }
  };

$stateProvider.state(profileBusiness);
$stateProvider.state(profileCause);

}

userProfileRoutes.$inject = ['$stateProvider'];
module.exports = userProfileRoutes;