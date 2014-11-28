'use strict';

function DashboardAdminCtrl($scope, Restangular) {
/* =======================================================================
	Get Lists of Users by role
======================================================================= */
	// Get all users from server
	var users = Restangular.all('users');
	
	$scope.setLoading = function(b) {
		$scope.loading = b;
	};

	$scope.loading = true;
	// Filter users by role
	users.getList().then(function(user) {
        $scope.causes = _.filter(user, function(user){
            return user.role === 'cause';
        });
        $scope.causesInactive = _.filter(user, function(user){
            return user.role === 'cause' && user.is_active === false;
        });
        $scope.businesses = _.filter(user, function(user){
            return user.role === 'business';
        });
        $scope.businessesInactive = _.filter(user, function(user){
            return user.role === 'business' && user.is_active === false;
        });
        $scope.individuals = _.filter(user, function(user){
            return user.role === 'individual';
        });
        $scope.individualsInactive = _.filter(user, function(user){
            return user.role === 'individual' && user.is_active === false;
        });
        $scope.loading = false;
    });


/* =======================================================================
	Modals
======================================================================= */
    $scope.changeUserStatus = function(userParam) {
        $scope.changeUserStatusModal.open({
            windowClass: 'change-user-status',
            resolve: {
                user: function () {
                    return userParam;
                }
            },
            controller: function(user) {
                $scope.user = user;
            }
        });
    };

    $scope.createSponsorship = function() {
        $scope.createSponsorshipModal.open({
            windowClass: 'create-sponsorship'
        });
    };
}

DashboardAdminCtrl.$inject = ['$scope', 'Restangular'];
module.exports = DashboardAdminCtrl;
