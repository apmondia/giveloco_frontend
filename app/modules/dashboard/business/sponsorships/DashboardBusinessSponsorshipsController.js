'use strict';

function DashboardBusinessSponsorshipsCtrl($scope, Restangular) {
  var causeList = [];
  console.debug($scope.currentUser);
  // for (var i=0; i < $scope.currentUser.sponsorships.length; i++) {
  //   var supportedCause = Restangular.one('users', $scope.currentUser.sponsorships[i].cause_id).get().$object;
  //   causeList.push(supportedCause);
  // }
  // console.debug('cause List: ', causeList);
  $scope.sponsorships = $scope.currentUser.getList('sponsorships');
}

DashboardBusinessSponsorshipsCtrl.$inject = ['$scope', 'Restangular'];
module.exports = DashboardBusinessSponsorshipsCtrl;
