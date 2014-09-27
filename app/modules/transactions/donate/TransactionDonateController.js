'use strict';

function TransactionDonateCtrl($rootScope, $scope) {
	var braintree = Braintree.create('MIIBCgKCAQEApqjiQ/+tjwXip1IEUxVb+rFsNQYbtDBwvldS6OkTj1SUwPprrg9Tf4FghLsQzgnQSq22Iyhl1GEToY66Z2xY4uZnnjQ5y+q+UhKNZX6dsUt2FkDbeGq3eqNBqiinEPMZXGqJaDWF/YTm4XwaeFx3hdJiLicHmxTUJNDBiN46IY4OF01eb2RA4dRlWV8VC6MCHqdB1KiUSQbCPGQuj3Dx34tDkTsUp32r51WD+gDFWWwwNn9RiY57Orm+8XE957v3Bb/f0MjvMoNcBZ1Ed1f3WpFkb2MGeXNaQFQE62u1/XxbLPJEgCc0+A2lofodhnDTTvISiqOUhWayVRJD4r/DIQIDAQAB');
	braintree.setup('MIIBCgKCAQEApqjiQ/+tjwXip1IEUxVb+rFsNQYbtDBwvldS6OkTj1SUwPprrg9Tf4FghLsQzgnQSq22Iyhl1GEToY66Z2xY4uZnnjQ5y+q+UhKNZX6dsUt2FkDbeGq3eqNBqiinEPMZXGqJaDWF/YTm4XwaeFx3hdJiLicHmxTUJNDBiN46IY4OF01eb2RA4dRlWV8VC6MCHqdB1KiUSQbCPGQuj3Dx34tDkTsUp32r51WD+gDFWWwwNn9RiY57Orm+8XE957v3Bb/f0MjvMoNcBZ1Ed1f3WpFkb2MGeXNaQFQE62u1/XxbLPJEgCc0+A2lofodhnDTTvISiqOUhWayVRJD4r/DIQIDAQAB', 
		'dropin', {
			container: 'donationForm',
			form: 'BraintreeDropin'
		});
}

TransactionDonateCtrl.$inject = ['$rootScope', '$scope'];
module.exports = TransactionDonateCtrl;