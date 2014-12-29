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
			return Restangular.one('users', user.id).getList('sponsorships');
		},
		/* =======================================================================
			Get List of Sponsors (Businesses)
		======================================================================= */
		getSponsors: function(user) {
			return Restangular.one('users', user.id).getList('sponsors');
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
