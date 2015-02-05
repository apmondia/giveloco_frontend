'use strict';

function HomeViewCtrl($scope, $stateParams, $state, parallaxHelper, $anchorScroll, $location) {
  $scope.fast = parallaxHelper.createAnimator(-0.3);

  console.debug("before", $stateParams, $state);
  $scope.$on('$stateChangeSuccess', function () {
    console.debug("success", $stateParams.goto, $state);
    if ($stateParams.goto) {
      $location.hash($stateParams.goto);
      $anchorScroll();
    }
  });

}

HomeViewCtrl.$inject = ['$scope', '$stateParams', '$state', 'parallaxHelper', '$anchorScroll', '$location'];
module.exports = HomeViewCtrl;
