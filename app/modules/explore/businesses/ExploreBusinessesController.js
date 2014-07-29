'use strict';

function ExploreBusinessesCtrl($rootScope, $scope, $timeout, Restangular) {
    // Get all users from server
    var users = Restangular.all('users');

    // Populate List of Businesses
    users.getList().then(function(users) {
        $scope.businesses = [];
        angular.forEach(users, function(user) {
            if (user.role === 'business') {
                $scope.businesses.push(user);
            }
        });
    });
}

ExploreBusinessesCtrl.$inject = ['$rootScope', '$scope', '$timeout', 'Restangular'];
module.exports = ExploreBusinessesCtrl;