'use strict';

function userAccountRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var accountHistory = {
      name: 'accountHistory',
      url: '/user/account/history',
      template: '<div users-account-history></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'history',
        pageTitle: 'Account History',
        pageDescription: 'User account history.'
      }
  },
  accountInfo = {
      name: 'accountInfo',
      url: '/user/account',
      template: '<div users-account-info></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'basic-info',
        pageTitle: 'Account Info',
        pageDescription: 'Basic account information.'
      }
  },
  accountVouchers = {
      name: 'accountVouchers',
      url: '/user/account/vouchers',
      template: '<div users-account-vouchers></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'vouchers',
        pageTitle: 'Account Vouchers',
        pageDescription: 'User account list of vouchers.'
      }
  };

$stateProvider.state(accountHistory);
$stateProvider.state(accountInfo);
$stateProvider.state(accountVouchers);

}

userAccountRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = userAccountRoutes;