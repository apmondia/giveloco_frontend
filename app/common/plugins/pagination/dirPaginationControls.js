'use strict';

var dirPaginationControls = function(paginationService) {
    var numberRegex = /^\d+$/;
    /**
     * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
     * links used in pagination
     *
     * @param currentPage
     * @param rowsPerPage
     * @param paginationRange
     * @param collectionLength
     * @returns {Array}
     */
    function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
        var pages = [];
        var totalPages = Math.ceil(collectionLength / rowsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var position;

        if (currentPage <= halfWay) {
            position = 'start';
        } else if (totalPages - halfWay < currentPage) {
            position = 'end';
        } else {
            position = 'middle';
        }

        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

            var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pages.push('...');
            } else {
                pages.push(pageNumber);
            }
            i ++;
        }
        return pages;
    }

    /**
     * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
     *
     * @param i
     * @param currentPage
     * @param paginationRange
     * @param totalPages
     * @returns {*}
     */
    function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange/2);
        if (i === paginationRange) {
            return totalPages;
        } else if (i === 1) {
            return i;
        } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            } else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            } else {
                return i;
            }
        } else {
            return i;
        }
    }

    return {
        restrict: 'AE',
        template:   '<ul class="pagination" ng-if="1 < pages.length">' +
                        '<li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }">' +
                            '<a href="" ng-click="setCurrent(1)" class="first">&laquo;</a>' +
                        '</li>' +
                        '<li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }" class="ng-scope">' +
                            '<a href="" ng-click="setCurrent(pagination.current - 1)" class="ng-binding prev">&lsaquo;</a>' +
                        '</li>' +
                        '<li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }">' +
                            '<a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a>' +
                        '</li>' +
                        '<li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }" class="ng-scope">' +
                            '<a href="" ng-click="setCurrent(pagination.current + 1)" class="ng-binding next">&rsaquo;</a>' +
                        '</li>' +
                        '<li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }">' +
                            '<a href="" ng-click="setCurrent(pagination.last)" class="last">&raquo;</a>' +
                        '</li>' +
                    '</ul>',
        scope: {
            maxSize: '=?',
            onPageChange: '&?'
        },
        link: function(scope, element, attrs) {
            var paginationId;
            paginationId = attrs.paginationId || '__default';
            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            if (!paginationService.isRegistered(paginationId)) {
                var idMessage = (paginationId !== '__default') ? ' (id: ' + paginationId + ') ' : ' ';
                throw 'pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive.';
            }

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };

            scope.$watch(function() {
                return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
            }, function(length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function() {
                return paginationService.getCurrentPage(paginationId);
            }, function(currentPage) {
                scope.setCurrent(currentPage);
                window.scrollTo(0,0);
            });

            scope.setCurrent = function(num) {
                if (numberRegex.test(num)) {
                    if (0 < num && num <= scope.pagination.last) {
                        paginationService.setCurrentPage(paginationId, num);
                        scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                        scope.pagination.current = num;

                        // if a callback has been set, then call it with the page number as an argument
                        if (scope.onPageChange) {
                            scope.onPageChange({ newPageNumber : num });
                        }
                    }
                }
            };

            function generatePagination() {
                scope.pages = generatePagesArray(1, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                scope.pagination.current = parseInt(paginationService.getCurrentPage(paginationId));
                scope.pagination.last = scope.pages[scope.pages.length - 1];
                if (scope.pagination.last < scope.pagination.current) {
                    scope.setCurrent(scope.pagination.last);
                }
            }
        }
    };
};

dirPaginationControls.$inject = ['paginationService'];
module.exports = dirPaginationControls;