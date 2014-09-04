'use strict';

function transactionRoutes($stateProvider) {

  var transaction = {
      parent: 'user',
      name: 'transaction',
      abstract: true,
      url: '/transaction',
      template: '<div ui-view></div>',
      controller: 'TransactionsCtrl'
  },
  transactionDonate = {
      name: 'transaction.donate',
      url: '/donate',
      template: '<div transaction-donate></div>',
      data: {
        moduleClasses: 'transaction',
        pageClasses: 'donate',
        pageTitle: 'Donate to the Cause',
        pageDescription: 'Donate to a good cause and receive credit that can be used as store credit at participating businesses.'
      }
  },
  transactionPledge = {
      name: 'transaction.pledge',
      url: '/pledge',
      template: '<div transaction-pledge></div>',
      data: {
        moduleClasses: 'transaction',
        pageClasses: 'pledge',
        pageTitle: 'Pledge to the Cause',
        pageDescription: 'Promote your business by attaching your brand to a good cause.'
      }
  },
  transactionRedeem = {
      name: 'transaction.redeem',
      url: '/redeem',
      template: '<div transaction-redeem></div>',
      data: {
        moduleClasses: 'transaction',
        pageClasses: 'redeem',
        pageTitle: 'Redeem Credit',
        pageDescription: 'Redeem your credit like real money at participating businesses.'
      }
  };

$stateProvider.state(transaction);
$stateProvider.state(transactionDonate);
$stateProvider.state(transactionPledge);
$stateProvider.state(transactionRedeem);

}

transactionRoutes.$inject = ['$stateProvider'];
module.exports = transactionRoutes;