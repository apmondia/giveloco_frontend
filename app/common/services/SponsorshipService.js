'use strict';

var Sponsorships = function(Restangular) {

	var sponsorService = {

		/* =======================================================================
			Get Lists of Supported Causes
		======================================================================= */
		getSponsorships: function(user) {
			var causeList = [];
			for (var i=0; i < user.sponsorships.length; i++) {
				if (user.sponsorships[i].status === 'accepted') {
					var supportedCause = Restangular.one('users', user.sponsorships[i].cause.id).get().$object;
					causeList.push(supportedCause);
				}
			}
			return causeList;
		},
		/* =======================================================================
			Get Lists of Supporting Businesses
		======================================================================= */	
		getSponsors: function(user) {
			var businessList = [];
			for (var i=0; i < user.sponsors.length; i++) {
				if (user.sponsors[i].status === 'accepted') {
					var sponsors = Restangular.one('users', user.sponsors[i].business.id).get().$object;
					businessList.push(sponsors);
				}
			}
			return businessList;
		}

	};

	return sponsorService;

};

Sponsorships.$inject = ['Restangular'];
module.exports = Sponsorships;