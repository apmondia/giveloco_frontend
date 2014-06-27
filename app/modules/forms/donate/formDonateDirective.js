'use strict';

module.exports = function formDonateDirective() {
	return {
		controller: 'FormDonateCtrl',
		template: require('./form-donate.html'),
		restrict: 'A',
		scope: true
	};
};