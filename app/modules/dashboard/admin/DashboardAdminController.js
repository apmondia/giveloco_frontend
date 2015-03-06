'use strict';

function DashboardAdminCtrl($scope, Restangular, alertService) {
/* =======================================================================
	Get Lists of Users by role
======================================================================= */
	// Get all users from server
	var users = Restangular.all('users');

	$scope.setLoading = function(b) {
		$scope.loading = b;
	};

	function rebuildFilteredList() {
		// Filter users by role
		var user = $scope.all_users;
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
	}

	$scope.$on('set-all-users', function () {
		rebuildFilteredList();
	});

	if ($scope.all_users) {
		rebuildFilteredList();
	} else {
		$scope.loading = true;
		$scope.$emit('refresh-all-users');
	}


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

		$scope.deleteSponsorship = function (sponsorship) {
			$scope.selectedSponsorship = sponsorship;
			$scope.deleteSponsorshipModal.open({
				windowClass: 'delete-sponsorship'
			});
		};

		$scope.cancelSponsorship = function (sponsorship) {
			Restangular.one('sponsorships', sponsorship.id).customPUT({ status: 'cancelled'}, 'resolve').then(
				function () {
					sponsorship.status = 'cancelled';
					$scope.$emit('refresh-all-users');
				},
				function () {
					alertService.showDanger("Could not update the sponsorship status.");
				});
		};

		$scope.pendingSponsorship = function (sponsorship) {
			Restangular.one('sponsorships', sponsorship.id).customPUT({ status: 'pending'}, 'resolve').then(
				function () {
					sponsorship.status = 'pending';
					$scope.$emit('refresh-all-users');
				},
				function () {
					alertService.showDanger("Could not update the sponsorship status.");
				});
			};

		$scope.acceptSponsorship = function (sponsorship) {
			Restangular.one('sponsorships', sponsorship.id).customPUT({ status: 'accepted'}, 'resolve').then(
				function () {
					sponsorship.status = 'accepted';
					$scope.$emit('refresh-all-users');
				},
				function () {
					alertService.showDanger("Could not update the sponsorship status.");
				});
			};

			$scope.deactivateUser = function(user) {
				var original = user.is_activated;
				user.is_activated = false;
				user.save().then(function () {
					//alert("Deactivated user!");
				}, function () {
					//alert("Could NOT deactivate user!");
					user.is_activated = original;
				});
			};

			$scope.activateUser = function(user) {
				var original = user.is_activated;
				user.is_activated = true;
				user.save().then(function () {
					//alert("Activated user");
				}, function () {
					//alert("Could not activate user");
					user.is_activated = original;
				});
			};

}

DashboardAdminCtrl.$inject = ['$scope', 'Restangular', 'alertService'];
module.exports = DashboardAdminCtrl;
