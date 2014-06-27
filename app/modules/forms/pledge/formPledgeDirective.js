'use strict';

module.exports = function formPledgeDirective() {
	return {
		controller: 'FormPledgeCtrl',
		template: require('./form-pledge.html'),
		restrict: 'A',
		scope: true
	};
};