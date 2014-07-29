'use strict';

var dirPaginate = function($compile, $parse, $timeout, paginationService) {
    return  {
        priority: 5000, //High priority means it will execute first
        terminal: true,
        compile: function(element, attrs){
            attrs.$set('ngRepeat', attrs.dirPaginate); //Add ng-repeat to the dom

            var expression = attrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage:[^|]*/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            //Now that we added ng-repeat to the element, proceed with compilation
            //but skip directives with priority 5000 or above to avoid infinite
            //recursion (we don't want to compile ourselves again)
            var compiled =  $compile(element, null, 5000);

            return function(scope, element, attrs){
                var paginationId;
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
                        if (0 < result) {
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
                //When linking just delegate to the link function returned by the new compile
                compiled(scope);
            };
        }
    };
};

dirPaginate.$inject = ['$compile', '$parse', '$timeout', 'paginationService'];
module.exports = dirPaginate;