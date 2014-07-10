'use strict';

function userProfileRoutes($stateProvider) {

  var profileBusiness = {
      name: 'profileBusiness',
      url: '/users/business/:id',
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
        cause: function(User, Restangular, $stateParams){
          var uid = $stateParams.id;
          return User.getOneUser(uid);
        //  return Restangular.one('users', $stateParams.id).get();
        }
      }
  };

$stateProvider.state(profileBusiness);
$stateProvider.state(profileCause);

}

userProfileRoutes.$inject = ['$stateProvider'];
module.exports = userProfileRoutes;