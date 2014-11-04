'use strict';

var dirPaginate = function($compile, $parse, $timeout, paginationService) {
    return  {
        terminal: true,
            multiElement: true,
            priority: 5000, // This setting is used in conjunction with the later call to $compile() to prevent infinite recursion of compilation
            compile: function dirPaginationCompileFn(tElement, tAttrs){

            // Add ng-repeat to the dom element
            if (tElement[0].hasAttribute('dir-paginate-start') || tElement[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                tAttrs.$set('ngRepeatStart', tAttrs.dirPaginate);
                tElement.eq(tElement.length - 1).attr('ng-repeat-end', true);
            } else {
                tAttrs.$set('ngRepeat', tAttrs.dirPaginate);
            }

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:[^|]*/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            return function dirPaginationLinkFn(scope, element, attrs){
                var paginationId;
                var compiled =  $compile(element, false, 5000); // we manually compile the element again, as we have now added ng-repeat. Priority less than 5000 prevents infinite recursion of compiling dirPaginate

                paginationId = attrs.paginationId || '__default';
                paginationService.registerInstance(paginationId);

                var currentPageGetter;
                if (attrs.currentPage) {
                    currentPageGetter = $parse(attrs.currentPage);
                } else {
                    // if the current-page attribute was not set, we'll make our own
                    var defaultCurrentPage = paginationId + '__currentPage';
                    scope[defaultCurrentPage] = 1;
                    currentPageGetter = $parse(defaultCurrentPage);
                }
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function() {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    scope.$watchCollection(function() {
                        return collectionGetter(scope);
                    }, function(collection) {
                        if (collection) {
                            paginationService.setCollectionLength(paginationId, collection.length);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);
            };
        }
    };
};

dirPaginate.$inject = ['$compile', '$parse', '$timeout', 'paginationService'];
module.exports = dirPaginate;