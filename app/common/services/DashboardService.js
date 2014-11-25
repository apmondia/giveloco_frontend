'use strict';

var Dashboard = function($state) {

	var dashService = {

        showDashByRole: function(role) {
            if (role === 'admin') {
                $state.go('dashboard.admin');
            } else if (role === 'business') {
                $state.go('dashboard.business');
            } else if (role === 'cause') {
                $state.go('dashboard.cause');
            } else {
                $state.go('dashboard.user');
            }
        },
        
	    showDashByRoleFor: function(currentUser) {
    		if (currentUser.role === 'admin') {
    			$state.go('dashboard.admin');
    		} else if (currentUser.role === 'business') {
    			$state.go('dashboard.business');
    		} else if (currentUser.role === 'cause') {
    			$state.go('dashboard.cause');
    		} else {
    			$state.go('dashboard.user');
    		}
		}

	};

	return dashService;

};

Dashboard.$inject = ['$state'];
module.exports = Dashboard;