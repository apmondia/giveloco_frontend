'use strict';

function HomeViewCtrl($scope, $document) {
	// $scope.navVisible = false;

	// $document.on('scroll', function() {
 //      if ($document.scrollTop() >= 555) {
 //      	console.log('Reveal navbar');
 //      	$scope.navVisible = true;
 //      } 
 //      if ($document.scrollTop() < 555) {
 //      	console.log('hide navbar');
 //      	$scope.navVisible = false;
 //      }
 //      console.log($scope.navVisible);
 //    });
}

HomeViewCtrl.$inject = ['$scope', '$document'];
module.exports = HomeViewCtrl;