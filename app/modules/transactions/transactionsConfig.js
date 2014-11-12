'use strict';

function transactionRoutes($stateProvider) {

  var transaction = {
      parent: 'user.id',
      name: 'transaction',
      abstract: true,
      template: '<div ui-view></div>',
      controller: 'TransactionsCtrl',
      data: {
        loginRequired: true
      }
  },
  transactionPurchase = {
      name: 'transaction.purchase',
      url: '^/business/:id/purchase',
      template: '<div transaction-purchase></div>',
      data: {
        moduleClasses: 'transaction',
        pageClasses: 'purchase',
        pageTitle: 'Donate to the Cause',
        pageDescription: 'Donate to a good cause and receive credit that can be used as store credit at participating businesses.'
      },
      resolve: {
        user: function(Restangular, $stateParams) {
            return Restangular.one('users', $stateParams.id).get();
        }
      }
  },
  transactionRedeem = {
      name: 'transaction.redeem',
      url: '^/business/:id/redeem',
      template: '<div transaction-redeem></div>',
      data: {
        moduleClasses: 'transaction',
        pageClasses: 'redeem',
        pageTitle: 'Redeem Credit',
        pageDescription: 'Redeem your credit like real money at participating businesses.'
      }
  },
  transactionSponsor = {
      name: 'transaction.sponsor',
      url: '^/cause/:id/sponsor',
      template: '<div transaction-sponsor></div>',
      data: {
        moduleClasses: 'transaction',
        pageClasses: 'sponsor',
        pageTitle: 'Pledge to the Cause',
        pageDescription: 'Promote your business by attaching your brand to a good cause.'
      }
  };

$stateProvider.state(transaction);
$stateProvider.state(transactionPurchase);
$stateProvider.state(transactionRedeem);
$stateProvider.state(transactionSponsor);

}

transactionRoutes.$inject = ['$stateProvider'];
module.exports = transactionRoutes;