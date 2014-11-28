'use strict';

module.exports = angular.module('dashboard.business.modals',
[
require('./redeem-certificate').name
])
.directive('dashboardBusinessModals', function () {
  return {
    template: require('./dashboard-business-modals.html')
  };
});
