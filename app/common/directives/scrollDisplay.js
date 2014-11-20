'use strict';

var scrollDisplay = function($window) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
	        angular.element($window).bind('scroll', function() {
				if (this.pageYOffset >= attrs.position) {
					element.addClass('active');
					element.removeClass('inactive');
				} else {
					element.addClass('inactive');
					element.removeClass('active');
				}
				scope.$apply();
	        });
    	}
    };
};

scrollDisplay.$inject = ['$window'];
module.exports = scrollDisplay;