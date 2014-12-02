'use strict';

var systemNotifications = function(alertService) {
    return {
    	// This directive works together with the alertService
        restrict: 'EA',
        template: 	'<div class="system-notification alert alert-dismissible" ng-class="alertClass" ng-if="alertVisible">' +
        			'{{alertMessage}}' +
        			'<button type="button" class="close" ng-click="closeAlert()"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
        			'</div>',
        link: function (scope) {
          scope.closeAlert = function() {
              alertService.hideAlert();
          };
        }
    };
};

systemNotifications.$inject = ['alertService'];
module.exports = systemNotifications;
