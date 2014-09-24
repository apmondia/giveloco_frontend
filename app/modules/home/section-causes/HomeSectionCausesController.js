'use strict';

function HomeSectionCausesCtrl($rootScope, $scope, Restangular) {
	// Get all users from server
    var users = Restangular.all('users');

    $scope.loading = true;

    // Populate List of Featured Causes
    users.getList().then(function(users) {
        $scope.featuredCauses = [];
        angular.forEach(users, function(user) {
            if (user.role === 'cause' && user.is_featured === true) {
                $scope.featuredCauses.push(user);
            }
        });
        $scope.loading = false;
    });
	
}

HomeSectionCausesCtrl.$inject = ['$rootScope', '$scope', 'Restangular'];
module.exports = HomeSectionCausesCtrl;