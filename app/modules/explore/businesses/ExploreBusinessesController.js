'use strict';

function ExploreBusinessesCtrl($rootScope, $scope, $timeout, Restangular) {
    // Get all users from server
    var users = Restangular.all('users');

    $scope.loading = true;
    // Filter users to populate list of Businesses
    users.getList().then(function(user) {
        $scope.businesses = _.filter(user, function(user){
            return user.role === 'business';
        });
        $scope.loading = false;
    });
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'Restangular'];
module.exports = ExploreBusinessesCtrl;