'use strict';

function formRoutes($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise('/');

  var formClaim = {
      name: 'formClaim',
      url: '/claim',
      template: '<div form-claim></div>',
      data: {
        moduleClasses: 'form',
        pageClasses: 'claim',
        pageTitle: 'Claim Vouchers',
        pageDescription: 'Claim vouchers worth the value of your donation that are redeemable at participating businesses.'
      }
  },
  formDonate = {
      name: 'formDonate',
      url: '/donate',
      template: '<div form-donate></div>',
      data: {
        moduleClasses: 'form',
        pageClasses: 'donate',
        pageTitle: 'Donate to the Cause',
        pageDescription: 'Donate to a good cause and you can claim vouchers that can be redeemed at businesses like real money.'
      }
  },
  formPledge = {
      name: 'formPledge',
      url: '/pledge',
      template: '<div form-pledge></div>',
      data: {
        moduleClasses: 'form',
        pageClasses: 'pledge',
        pageTitle: 'Pledge to the Cause',
        pageDescription: 'Promote your business by attaching your brand to a good cause.'
      }
  },
  formRedeem = {
      name: 'formRedeem',
      url: '/redeem',
      template: '<div form-redeem></div>',
      data: {
        moduleClasses: 'form',
        pageClasses: 'redeem',
        pageTitle: 'Redeem Voucher',
        pageDescription: 'Redeem your vouchers like real money at participating businesses.'
      }
  };

$stateProvider.state(formClaim);
$stateProvider.state(formDonate);
$stateProvider.state(formPledge);
$stateProvider.state(formRedeem);

}

formRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = formRoutes;