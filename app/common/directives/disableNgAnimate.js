'use strict';

var disableNgAnimate = function($animate) {
    return {
		restrict: 'A',
		link: function(scope, element) {
			$animate.enabled(false, element);
		}
	};
};

disableNgAnimate.$inject = ['$animate'];
module.exports = disableNgAnimate;