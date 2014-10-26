'use strict';

function dashboardRoutes($stateProvider) {

    var dashboard = {
            name: 'dashboard',
            template: '<div dashboard-view></div>',
            url: '/',
            controller: function(Auth, Dashboard, $state) {
            	if ($state.is('dashboard')) { $state.go(Auth.isLoggedIn() ? 'dashboard' : 'home.guest'); }
            	if (Auth.isLoggedIn() === true) {
            		Auth.getCurrentUser().then(function(currentUser){
            			Dashboard.showDashByRoleFor(currentUser);
            		});
            	}
            },
            data: {
                moduleClasses: 'dashboard',
                pageClasses: '',
                pageTitle: 'Dashboard',
                pageDescription: ''
            }
        },
        adminDash = {
        	name: 'dashboard.admin',
            template: '<div dashboard-admin-view></div>',
            url: '',
            data: {
                moduleClasses: 'dashboard',
                pageClasses: 'admin',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your admin account.'
            }
        },
        businessDash = {
        	name: 'dashboard.business',
            template: '<div dashboard-business-view></div>',
            url: '',
            data: {
                moduleClasses: 'dashboard',
                pageClasses: 'business',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your business account.'
            }
        },
        causeDash = {
        	name: 'dashboard.cause',
            template: '<div dashboard-cause-view></div>',
            url: '',
            data: {
                moduleClasses: 'dashboard',
                pageClasses: 'cause',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your cause account.'
            }
        },
        userDash = {
        	name: 'dashboard.user',
            template: '<div dashboard-user-view></div>',
            url: '',
            data: {
                moduleClasses: 'dashboard',
                pageClasses: 'user',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your user account.'
            }
        };

    $stateProvider.state(dashboard);
    $stateProvider.state(adminDash);
    $stateProvider.state(businessDash);
    $stateProvider.state(causeDash);
    $stateProvider.state(userDash);

}

dashboardRoutes.$inject = ['$stateProvider'];
module.exports = dashboardRoutes;