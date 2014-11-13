'use strict';

var paginationService = function() {
	var instances = {};
    var lastRegisteredInstance;

    this.registerInstance = function(instanceId) {
        if (typeof instances[instanceId] === 'undefined') {
            instances[instanceId] = {
                asyncMode: false
            };
            lastRegisteredInstance = instanceId;
        }
    };

    this.isRegistered = function(instanceId) {
        return (typeof instances[instanceId] !== 'undefined');
    };

    this.getLastInstanceId = function() {
        return lastRegisteredInstance;
    };

    this.setCurrentPageParser = function(instanceId, val, scope) {
        instances[instanceId].currentPageParser = val;
        instances[instanceId].context = scope;
    };
    this.setCurrentPage = function(instanceId, val) {
        instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
    };
    this.getCurrentPage = function(instanceId) {
        var parser = instances[instanceId].currentPageParser;
        return parser ? parser(instances[instanceId].context) : 1;
    };

    this.setItemsPerPage = function(instanceId, val) {
        instances[instanceId].itemsPerPage = val;
    };
    this.getItemsPerPage = function(instanceId) {
        return instances[instanceId].itemsPerPage;
    };

    this.setCollectionLength = function(instanceId, val) {
        instances[instanceId].collectionLength = val;
    };
    this.getCollectionLength = function(instanceId) {
        return instances[instanceId].collectionLength;
    };

    this.setAsyncModeTrue = function(instanceId) {
        instances[instanceId].asyncMode = true;
    };

    this.isAsyncMode = function(instanceId) {
        return instances[instanceId].asyncMode;
    };
};

paginationService.$inject = [];
module.exports = paginationService;