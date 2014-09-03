'use strict';

function userAccountRoutes($stateProvider) {

  var account = {
      parent: 'user',
      name: 'account',
      abstract: true,
      url: '/account',
      template: '<div ui-view></div>',
      controller: 'UsersAccountCtrl',
      data: {
        authRequired: true
      }
  },
  accountHistory = {
      name: 'account.history',
      url: '/history',
      template: '<div users-account-history></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'history',
        pageTitle: 'Account History',
        pageDescription: 'User account history.'
      }
  },
  accountSettings = {
      name: 'account.settings',
      url: '',
      template: '<div users-account-settings></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'settings',
        pageTitle: 'Account Settings',
        pageDescription: 'Basic account information.'
      }
  };

$stateProvider.state(account);
$stateProvider.state(accountHistory);
$stateProvider.state(accountSettings);

}

userAccountRoutes.$inject = ['$stateProvider'];
module.exports = userAccountRoutes;