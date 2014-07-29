'use strict';

function userProfileRoutes($stateProvider) {

    var profile = {
            name: 'profile',
            abstract: true,
            url: '/user/:id',
            template: '<div ui-view></div>',
            controller: 'UsersProfileCtrl',
            resolve: {
                user: function(Restangular, $stateParams){
                    console.log($stateParams.id);
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        },
        profileBusiness = {
            name: 'profile.business',
            url: '/business',
            template: '<div users-profile-business></div>',
            data: {
                moduleClasses: 'users profile',
                pageClasses: 'business',
                pageTitle: 'Profile',
                pageDescription: 'Profile Page for Businesses'
            }
        },
        profileCause = {
            name: 'profile.cause',
            url: '/cause',
            template: '<div users-profile-cause></div>',
            data: {
                moduleClasses: 'users profile',
                pageClasses: 'cause',
                pageTitle: 'Profile',
                pageDescription: 'Profile Page for Causes'
            }
        };

    $stateProvider.state(profile);
    $stateProvider.state(profileBusiness);
    $stateProvider.state(profileCause);

}

userProfileRoutes.$inject = ['$stateProvider'];
module.exports = userProfileRoutes;