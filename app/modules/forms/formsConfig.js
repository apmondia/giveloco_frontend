'use strict';

function formRoutes($stateProvider) {

  var formDonate = {
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

$stateProvider.state(formDonate);
$stateProvider.state(formPledge);
$stateProvider.state(formRedeem);

}

formRoutes.$inject = ['$stateProvider'];
module.exports = formRoutes;