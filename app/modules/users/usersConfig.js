'use strict';

function userRoutes($stateProvider) {

    var user = {
            name: 'user',
            abstract: true,
            url: '/user',
            template: '<div ui-view></div>',
            controller: 'UsersCtrl',
            resolve: {
                allUsers: function(Restangular) {
                    return Restangular.all('users');
                },
                allCauses: function(allUsers) {
                    allUsers.getList().then(function(user) {
                        $scope.causes = _.filter(user, function(user){
                            return user.role === USER_ROLES.cause && user.is_published === true && user.is_activated === true;
                        });
                    });
                }
            }
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