'use strict';

function dashboardRoutes($stateProvider) {

    var dashboard = {
            name: 'dashboard',
            template: '<div dashboard-view></div>',
            url: '/dashboard',
            controller: function($state, Auth, DashService, $scope) {
              // Show Dashboard if user is logged in, or homepage if user is logged out
              if (!Auth.isLoggedIn()) {
                $state.go('home.guest');
              } else {
                  $scope.spinner = true;
                  Auth.getCurrentUser(function(currentUser){
                    /*
                    if (!angular.isUndefined(Auth.currentRole)) {
                      // this is used if the user has refreshed the site at any point
                      DashService.showDashByRoleFor(currentUser);
                      $scope.spinner = false;
                    } else {
                    */
                      // This is used if the user is just logging in
                      DashService.showDashByRole(currentUser.role);
                      $scope.spinner = false;
                    //}
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
            views: {
                'dash-summary': {
                    template: '<div dashboard-admin-summary></div>'
                },
                'dash-content': {
                    template: '<div dashboard-admin-view></div>'
                }
            },
            data: {
                moduleClasses: 'dashboard admin',
                pageClasses: 'admin',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your admin account.'
            }
        },
        businessDash = {
        	name: 'dashboard.business',
            views: {
                'dash-summary': {
                    template: '<div dashboard-business-summary></div>'
                },
                'dash-content': {
                    template: '<div dashboard-business-view></div>'
                }
            },
            data: {
                moduleClasses: 'dashboard business',
                pageClasses: 'business',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your business account.'
            }
        },
        causeDash = {
        	name: 'dashboard.cause',
            views: {
                'dash-summary': {
                    template: '<div dashboard-cause-summary></div>'
                },
                'dash-content': {
                    template: '<div dashboard-cause-view></div>'
                }
            },
            data: {
                moduleClasses: 'dashboard',
                pageClasses: 'cause',
                pageTitle: 'Dashboard',
                pageDescription: 'Dashboard for your cause account.'
            }
        },
        userDash = {
        	name: 'dashboard.user',
            views: {
                'dash-summary': {
                    template: ''
                },
                'dash-content': {
                    template: '<div dashboard-user-view></div>'
                }
            },
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
