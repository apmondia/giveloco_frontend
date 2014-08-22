'use strict';

function ExploreBusinessesCtrl($rootScope, $scope, $timeout, Restangular) {
    // Get all users from server
    var users = Restangular.all('users');

    $scope.loading = true;
    // Filter users to populate list of Businesses
    users.getList().then(function(users) {
        $scope.businesses = [];
        angular.forEach(users, function(user) {
            if (user.role === 'business') {
                $scope.businesses.push(user);
                $scope.loading = false;
            }
        });
    });
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'Restangular'];
module.exports = ExploreBusinessesCtrl;