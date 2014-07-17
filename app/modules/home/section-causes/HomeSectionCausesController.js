'use strict';

function HomeSectionCausesCtrl($rootScope, $scope, User) {

	$scope.featuredCauses = User.getAllFeaturedCauses();
	$scope.slides = User.getAllFeaturedCauses();
	
}

HomeSectionCausesCtrl.$inject = ['$rootScope', '$scope', 'User'];
module.exports = HomeSectionCausesCtrl;