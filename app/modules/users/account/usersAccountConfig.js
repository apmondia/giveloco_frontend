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
      abstract: true,
      url: '',
      template: '<div users-account-details></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'details',
        pageTitle: 'Account Details',
        pageDescription: 'Your account information.'
      }
  },
  accountDetailsView = {
      name: 'account.details.view',
      url: '/details',
      template: '<div users-account-details-view></div>'
  },
  accountDetailsEdit = {
      name: 'account.details.edit',
      url: '/details/edit',
      template: '<div users-account-details-edit></div>',
      data: {
        pageTitle: 'Edit Account Details',
        pageDescription: 'Edit your account information.'
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
  },
  accountChangePassword = {
      name: 'account.changePassword',
      url: '/change-password',
      template: '<div users-account-change-password></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'change-password',
        pageTitle: 'Change Account Password',
        pageDescription: 'User account settings.'
      }
  };

$stateProvider.state(account);
$stateProvider.state(accountDetails);
$stateProvider.state(accountDetailsView);
$stateProvider.state(accountDetailsEdit);
$stateProvider.state(accountHistory);
$stateProvider.state(accountSettings);
$stateProvider.state(accountChangePassword);

}

userAccountRoutes.$inject = ['$stateProvider'];
module.exports = userAccountRoutes;