'use strict';

function ExploreCtrl($scope, $timeout) {
/* =======================================================================
    Pagination Settings for Child Controllers
 ======================================================================= */
    $scope.filteredItems = [];
    $scope.currentPage = 1;
    $scope.itemsPerPage = 12;
    $scope.maxSize = 5;

    $scope.$watchCollection('search', function() {
        $scope.currentPage = 1;
    });

    $timeout (function() {
        $scope.pageChanged = function () {
            window.scrollTo(0,0);
        };
    }, 250);
}

ExploreCtrl.$inject = ['$scope', '$timeout'];
module.exports = ExploreCtrl;