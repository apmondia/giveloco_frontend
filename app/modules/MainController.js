/*jshint camelcase: false */
'use strict';
// MainCtrl is set in the index.html file
function MainCtrl($rootScope, $scope, $timeout, $state, Restangular, Auth, USER_ROLES) {

/* =======================================================================
	Session Control
======================================================================= */
	$scope.logout = function() {
		Auth.logout().then(function() {
			$state.go('auth.login');
		});
	};

	$scope.currentUser = null;
	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.userRoles = USER_ROLES;

	var setCurrentUser = function() {
		Auth.getCurrentUser().then(function(userData){
			$scope.currentUser = userData;
			localStorage.setItem('uname', userData.first_name);
			$scope.currentUserName = userData.first_name;
		});
	};
	
	setCurrentUser();
	$scope.currentUserName = localStorage.getItem('uname');
	$rootScope.$on('user.data.changed', setCurrentUser);
	$rootScope.$on('logged-in', setCurrentUser);


/* =======================================================================
	System Notifications
======================================================================= */
	$rootScope.alertVisible = false;


/* =======================================================================
	Get Lists of Causes and Businesses
======================================================================= */
	// Get all users from server
	var users = Restangular.all('users');

	$scope.loading = true;
	// Filter users to populate list of Causes
	users.getList().then(function(user) {
        $scope.causes = _.filter(user, function(user){
            return user.role === 'cause';
        });
        $scope.businesses = _.filter(user, function(user){
            return user.role === 'business';
        });
        $scope.loading = false;
    });


/* =======================================================================
	Braintree Configuration
======================================================================= */
	var braintree = Braintree.create('MIIBCgKCAQEApqjiQ/+tjwXip1IEUxVb+rFsNQYbtDBwvldS6OkTj1SUwPprrg9Tf4FghLsQzgnQSq22Iyhl1GEToY66Z2xY4uZnnjQ5y+q+UhKNZX6dsUt2FkDbeGq3eqNBqiinEPMZXGqJaDWF/YTm4XwaeFx3hdJiLicHmxTUJNDBiN46IY4OF01eb2RA4dRlWV8VC6MCHqdB1KiUSQbCPGQuj3Dx34tDkTsUp32r51WD+gDFWWwwNn9RiY57Orm+8XE957v3Bb/f0MjvMoNcBZ1Ed1f3WpFkb2MGeXNaQFQE62u1/XxbLPJEgCc0+A2lofodhnDTTvISiqOUhWayVRJD4r/DIQIDAQAB');

}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
MainCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$state', 'Restangular', 'Auth', 'USER_ROLES'];
module.exports = MainCtrl;