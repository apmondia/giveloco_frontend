'use strict';

// Validates tht two password fields are the same
var passwordEquals = function() {
	return {
	    restrict: 'A',
	    require: 'ngModel', // get a hold of NgModelController
	    link: function(scope, elem, attrs, ngModel) {
			if(!ngModel) {return;} // do nothing if no ng-model

			// watch own value and re-validate on change
			scope.$watch(attrs.ngModel, function() {
				validate();
			});

			// observe the other value and re-validate on change
			attrs.$observe('password-equals', function () {
				validate();
			});

			var validate = function() {
				// values
				var val1 = ngModel.$viewValue;
				var val2 = attrs.passwordEquals;

				// set validity
				if (val1 && val2) {
					ngModel.$setValidity('password-equals', val2 === val1);
				}
			};
	    }
	};
};

passwordEquals.$inject = [];
module.exports = passwordEquals;