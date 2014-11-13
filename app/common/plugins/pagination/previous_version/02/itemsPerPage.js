'use strict';

var itemsPerPage = function(paginationService) {
    return function(collection, itemsPerPage, paginationId) {
        if (typeof (paginationId) === 'undefined') {
            paginationId = '__default';
        }
        if (!paginationService.isRegistered(paginationId)) {
            throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
        }
        var end;
        var start;
        if (collection instanceof Array) {
            itemsPerPage = parseInt(itemsPerPage) || 9999999999;
            if (paginationService.isAsyncMode(paginationId)) {
                start = 0;
            } else {
                start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
            }
            end = start + itemsPerPage;
            paginationService.setItemsPerPage(paginationId, itemsPerPage);

            return collection.slice(start, end);
        } else {
            return collection;
        }
    };
};

itemsPerPage.$inject = ['paginationService'];
module.exports = itemsPerPage;