'use strict';

function HomeViewCtrl($scope, parallaxHelper) {
  $scope.fast = parallaxHelper.createAnimator(-0.3);
}

HomeViewCtrl.$inject = ['$scope', 'parallaxHelper'];
module.exports = HomeViewCtrl;
