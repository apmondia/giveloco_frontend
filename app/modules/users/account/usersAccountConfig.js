'use strict';

function userAccountRoutes($stateProvider) {

  var account = {
      parent: 'user.id',
      name: 'account',
      abstract: true,
      url: '/account',
      template: '<div users-account-layout></div>',
      controller: 'UsersAccountCtrl',
      data: {
        authRequired: true
      }
  },
  accountDetails = {
      name: 'account.details',
      url: '/details',
      template: '<div users-account-details></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'details',
        pageTitle: 'Account Details',
        pageDescription: 'Basic account information.'
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
      url: '/settings',
      template: '<div users-account-settings></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'settings',
        pageTitle: 'Account Settings',
        pageDescription: 'User account settings.'
      }
  };

$stateProvider.state(account);
$stateProvider.state(accountDetails);
$stateProvider.state(accountHistory);
$stateProvider.state(accountSettings);

}

userAccountRoutes.$inject = ['$stateProvider'];
module.exports = userAccountRoutes;