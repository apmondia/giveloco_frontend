'use strict';

function userRoutes($stateProvider) {

    var user = {
            name: 'user',
            abstract: true,
            url: '/user',
            template: '<div ui-view></div>',
            controller: 'UsersCtrl'
        },
        userID = {
            name: 'user.id',
            abstract: true,
            url: '/:id',
            template: '<div ui-view></div>',
            controller: 'UsersCtrl',
            resolve: {
                user: function(Restangular, $stateParams) {
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        };

    $stateProvider.state(user);
    $stateProvider.state(userID);

}

userRoutes.$inject = ['$stateProvider'];
module.exports = userRoutes;