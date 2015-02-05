'use strict';

function HomeViewCtrl($scope, $stateParams, $state, $timeout, parallaxHelper, $anchorScroll, $location) {
  $scope.fast = parallaxHelper.createAnimator(-0.3);
  $scope.$on('$stateChangeSuccess', function () {

    if ($stateParams.goto) {
      $timeout(function () {
        //console.debug("sdlk, ", $("#"+$stateParams.goto));
        $('html,body').animate({ scrollTop: $("#"+$stateParams.goto).offset().top }, 1000);
        // $location.hash();
        // $anchorScroll();
      }, 100);
    }
  });
}

HomeViewCtrl.$inject = ['$scope', '$stateParams', '$state', '$timeout', 'parallaxHelper', '$anchorScroll', '$location'];
module.exports = HomeViewCtrl;
