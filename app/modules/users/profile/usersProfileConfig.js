'use strict';

function userProfileRoutes($stateProvider) {

    var profile = {
            parent: 'user.id',
            name: 'profile',
            abstract: true,
            template: '<div users-profile-view></div>',
            controller: function($scope, user){
                $scope.user = user;
            }
        },
        profileBusiness = {
            name: 'profile.business',
            url: '^/business/:id',
            template: '<div users-profile-business></div>',
            data: {
                userType: 'business',
                moduleClasses: 'users profile',
                pageClasses: 'business',
                pageTitle: 'Profile',
                pageDescription: 'Profile Page for Businesses'
            }
        },
        profileCause = {
            name: 'profile.cause',
            url: '^/cause/:id',
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