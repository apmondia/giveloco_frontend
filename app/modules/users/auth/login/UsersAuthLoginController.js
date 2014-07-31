'use strict';

function UsersAuthLoginCtrl($rootScope, $scope, Auth, AUTH_EVENTS) {

	$scope.credentials = {
		email: '',
		password: ''
	};
	
	$scope.login = function(credentials) {
		$scope.$watch('loginForm.$valid', function() {
			console.log(credentials);
        
			Auth.login(credentials).then(function(user) {
				$scope.setCurrentUser(user);
		        console.log($scope.currentUser); // => {id: 1, ect: '...'}
		        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
		    }, function(error) {
		    	console.log(error);
		        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		    });

		    $scope.$on('devise:login', function(event, currentUser) {
		        // after a login, a hard refresh, a new tab
		        console.log(currentUser.id);
		    });

		    $scope.$on('devise:new-session', function(event, currentUser) {
		        // user logged in by Auth.login({...})
		        console.log('Logged in as ' + currentUser.id);
		    });
		});	
	};

}

UsersAuthLoginCtrl.$inject = ['$rootScope', '$scope', 'Auth', 'AUTH_EVENTS'];
module.exports = UsersAuthLoginCtrl;