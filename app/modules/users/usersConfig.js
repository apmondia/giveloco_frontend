'use strict';

function userRoutes($stateProvider) {

    var user = {
            name: 'user',
            abstract: true,
            url: '/user/:id',
            template: '<div ui-view></div>',
            controller: 'UsersCtrl',
            resolve: {
                user: function(Restangular, $stateParams) {
                    return Restangular.one('users', $stateParams.id).get();
                }
            }
        };

    $stateProvider.state(user);

}

userRoutes.$inject = ['$stateProvider'];
module.exports = userRoutes;