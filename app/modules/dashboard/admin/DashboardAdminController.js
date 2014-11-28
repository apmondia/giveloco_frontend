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
        $scope.causesAll = _.filter(user, function(user){
            return user.role === 'cause';
        });
        $scope.causesActive = _.filter(user, function(user){
            return user.role === 'cause' && user.is_active === true;
        });
        $scope.causesInactive = _.filter(user, function(user){
            return user.role === 'cause' && user.is_active === false;
        });
        $scope.businessesAll = _.filter(user, function(user){
            return user.role === 'business';
        });
        $scope.businessesActive = _.filter(user, function(user){
            return user.role === 'business' && user.is_active === true;
        });
        $scope.businessesInactive = _.filter(user, function(user){
            return user.role === 'business' && user.is_active === false;
        });
        $scope.individualsAll = _.filter(user, function(user){
            return user.role === 'individual';
        });
        $scope.individualsActive = _.filter(user, function(user){
            return user.role === 'individual' && user.is_active === true;
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
