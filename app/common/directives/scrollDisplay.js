'use strict';

var scrollDisplay = function($window, $timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
	        angular.element($window).bind('scroll', function() {
	        	var revealElem = function() {
	        		element.removeClass('inactive');
	        		element.removeClass('hide');
	        		element.addClass('active');
					element.addClass('show');
	        	};
	        	var removeElem = function() {
	        		element.removeClass('active');
	        		element.removeClass('show');
	        		element.addClass('inactive');
					$timeout(function() {element.addClass('hide');}, 300);
	        	};

				if (this.pageYOffset >= attrs.position) {
					if (element.hasClass('inactive')) {
						revealElem();
					} else {
						revealElem();
					}
				} else {
					if (element.hasClass('active')) {
						removeElem();
					} else {
						removeElem();
					}
				}
				scope.$apply();
	        });
    	}
    };
};

scrollDisplay.$inject = ['$window', '$timeout'];
module.exports = scrollDisplay;