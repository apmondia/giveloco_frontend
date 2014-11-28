'use strict';

var Sponsorships = function(Restangular, $http, apiConfig) {

	var sponsorService = {
		/* =======================================================================
			Get List of Accepted Sponsorships
		======================================================================= */
		getAcceptedSponsorships: function(user) {
			var sponsorshipList = [];
			for (var i=0; i < user.sponsorships.length; i++) {
				if ( user.sponsorships[i].status === 'accepted' ) {
			        sponsorshipList.push( user.sponsorships[i] );
			    }
			}
			return sponsorshipList;
		},
		/* =======================================================================
			Get List of Sponsored Causes
		======================================================================= */
		getSponsoredCauses: function(user) {
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
			Get List of Sponsors (Businesses)
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
		},
		/* =======================================================================
			Create Sponsorship
		======================================================================= */	
		createSponsorship: function(data) {
			return $http.post(apiConfig.API.sponsorship.create, data).then(function(data){
				return data;
			});
		}

	};

	return sponsorService;

};

Sponsorships.$inject = ['Restangular', '$http', 'apiConfig'];
module.exports = Sponsorships;