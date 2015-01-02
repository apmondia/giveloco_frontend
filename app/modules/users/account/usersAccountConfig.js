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
        restricted: true
      }
  },
  accountBilling = {
      name: 'account.billing',
      url: '/billing-info',
      template: '<div users-account-billing-info></div>',
      data: {
        moduleClasses: 'users account',
        pageClasses: 'billing',
        pageTitle: 'Account Billing Information',
        pageDescription: 'Add and update billing and credit card information.'
      }
  },
  accountProfile = {
      name: 'account.profile',
      abstract: true,
      url: '',
      template: '<div users-account-profile></div>',
      data: {
        moduleClasses: 'users account'
      }
  },
  accountProfileView = {
      name: 'account.profile.view',
      url: '/profile',
      template: '<div users-account-profile-view></div>',
      data: {
        pageClasses: 'profile view',
        pageTitle: 'Profile',
        pageDescription: 'Your account information.'
      }
  },
  accountProfileEdit = {
      name: 'account.profile.edit',
      url: '/profile/edit',
      template: '<div users-account-profile-edit></div>',
      data: {
        pageClasses: 'profile edit',
        pageTitle: 'Edit Profile',
        pageDescription: 'Edit your account profile.'
      }
  },
  // accountHistory = {
  //     name: 'account.history',
  //     url: '/history',
  //     template: '<div users-account-history></div>',
  //     data: {
  //       moduleClasses: 'users account',
  //       pageClasses: 'history',
  //       pageTitle: 'Account History',
  //       pageDescription: 'User account history.'
  //     }
  // },
  // accountSponsors = {
  //     name: 'account.sponsors',
  //     url: '/sponsors',
  //     template: '<div users-account-sponsors></div>',
  //     data: {
  //       moduleClasses: 'users account',
  //       pageClasses: 'sponsors',
  //       pageTitle: 'Sponsors and Sponsorships',
  //       pageDescription: 'Cause sponsors and business sponsorships.'
  //     }
  // },
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
$stateProvider.state(accountBilling);
$stateProvider.state(accountProfile);
$stateProvider.state(accountProfileView);
$stateProvider.state(accountProfileEdit);
// $stateProvider.state(accountHistory);
// $stateProvider.state(accountSponsors);
$stateProvider.state(accountChangePassword);

}

userAccountRoutes.$inject = ['$stateProvider'];
module.exports = userAccountRoutes;
